import NextAuth, { type DefaultSession } from "next-auth";
import { UserRole } from "@prisma/client";
import { PrismaAdapter } from "@auth/prisma-adapter";

import { db } from "@/lib/db";
import { getUserById } from "@/data/user";
import authConfig from "@/auth.config";

// NOTE: 공식 문서대로 타입 지정을 해도 아래 session.user.role = token.role 부분에 타입 에러가 발생합니다. session.user.role = token.role에 `as "ADMIN" | "USER";`를 추가하는 방법으로 타입 에러를 해결했습니다.
// https://authjs.dev/getting-started/typescript
declare module "next-auth" {
	/**
	 * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
	 */
	interface Session {
		user: {
			/** The user's postal address. */
			role: "ADMIN" | "USER";
			/**
			 * By default, TypeScript merges new interface properties and overwrites existing ones.
			 * In this case, the default session user properties will be overwritten,
			 * with the new ones defined above. To keep the default session user properties,
			 * you need to add them back into the newly declared interface.
			 */
		} & DefaultSession["user"];
	}
}

export const { auth, handlers, signIn, signOut } = NextAuth({
	adapter: PrismaAdapter(db),
	callbacks: {
		async signIn({ user }) {
			if (!user.id) return false;

			const existingUser = await getUserById(user.id);

			if (!existingUser || !existingUser.emailVerified) {
				return false;
			}

			return true;
		},
		async session({ token, session }) {
			// NOTE: sub - subject의 약자로 jwt에서 사용자의 고유 식별자(id)를 나타낼 때 표준으로 정의된 필드
			if (token.sub && session.user) {
				session.user.id = token.sub;
			}

			if (token.role && session.user) {
				session.user.role = token.role as UserRole;
			}

			return session;
		},
		// async jwt({ token, user, profile }) {
		// NOTE: user, profile을 확인해보면 항상 undefined를 반환합니다.
		// 이와 같은 동작 방식은 NextAuth에서 의도된 동작으로, NextAuth는 최초 로그인 시 토큰에 필요한 정보를 저장하고 이후 호출에서는 토큰만 참조하여 user와 profile이 undefined가 됩니다.
		async jwt({ token }) {
			if (!token.sub) return token;

			const existingUser = await getUserById(token.sub);

			if (!existingUser) return token;

			token.role = existingUser.role;

			return token;
		},
	},
	session: { strategy: "jwt" },
	...authConfig,
});

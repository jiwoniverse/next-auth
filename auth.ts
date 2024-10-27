import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";

import { db } from "@/lib/db";
import authConfig from "@/auth.config";

export const { auth, handlers, signIn, signOut } = NextAuth({
	adapter: PrismaAdapter(db),
	callbacks: {
		async session({ token, session }) {
			console.log("SESSION TOKEN: ", { sessionToken: token, session });

			if (session.user) {
				session.user.customField = token.customField;
			}

			return session;
		},
		async jwt({ token, user }) {
			console.log("TOKEN: ", { token });
			token.customField = "test";
			return token;
		},
	},
	session: { strategy: "jwt" },
	...authConfig,
});

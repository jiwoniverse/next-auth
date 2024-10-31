/* eslint-disable @typescript-eslint/no-unused-vars */
import { UserRole } from "@prisma/client";
import NextAuth, { type DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
	role: UserRole;
};

declare module "next-auth" {
	interface Session {
		id: string;
		user: ExtendedUser;
	}
}

import { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
	/** Returned by the `jwt` callback and `auth`, when using JWT sessions */
	interface JWT {
		/** OpenID ID Token */
		idToken?: string;
	}
}

/** The module declaration can be added to any file that is “included” in your project’s tsconfig.json. */

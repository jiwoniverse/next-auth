"use server";

// import { revalidatePath, revalidateTag } from "next/cache";
import * as z from "zod";
import { AuthError } from "next-auth";

import { signIn } from "@/auth";
import { LoginSchema } from "@/schemas";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const login = async (values: z.infer<typeof LoginSchema>) => {
	const validatedFields = LoginSchema.safeParse(values);

	if (!validatedFields.success) {
		return { error: "유효하지 않은 입력값입니다." };
	}

	const { email, password } = validatedFields.data;

	try {
		await signIn("credentials", {
			email,
			password,
			redirectTo: DEFAULT_LOGIN_REDIRECT,
		});
	} catch (error) {
		if (error instanceof AuthError) {
			switch (error.type) {
				case "CredentialsSignin":
					return {
						error: "이메일 또는 비밀번호가 올바르지 않습니다.",
					};
				default:
					return { error: "로그인 중 문제가 발생하였습니다. 잠시 후에 다시 시도해주세요." };
			}
		}

		throw error;
	}
};

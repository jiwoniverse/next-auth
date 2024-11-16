import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (email: string, token: string) => {
	const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;

	await resend.emails.send({
		from: "onboarding@resend.dev",
		to: email,
		subject: "이메일 인증 요청",
		html: `<p><a href="${confirmLink}">여기</a>를 눌러 이메일을 인증해주세요.</p>`,
	});
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
	const resetLink = `http://localhost:3000/auth/new-password?token=${token}`;

	await resend.emails.send({
		from: "onboarding@resend.dev",
		to: email,
		subject: "비밀번호 초기화",
		html: `<p><a href="${resetLink}">여기</a>를 눌러 비밀번호를 초기화 해주세요.</p>`,
	});
};

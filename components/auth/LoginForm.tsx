import { CardWrapper } from "@/components/auth/CardWrapper";

// NOTE: export default 하지 않는 이유: 페이지 컴포넌트가 아니라 일반 컴포넌트이기 때문
export const LoginForm = () => {
	return (
		<CardWrapper
			headerLabel="Welcome back"
			backButtonLabel="Dont have an account?"
			backButtonHref="/auth/register"
			showSocial
		>
			Login Form!
		</CardWrapper>
	);
};

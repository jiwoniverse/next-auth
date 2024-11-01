export const getErrorPageMessage = (query: string) => {
	switch (query) {
		case "Configuration":
			return "서버 설정에 문제가 있습니다. 나중에 다시 시도해주세요.";
		case "AccessDenied":
			return "접근이 제한되었습니다.";
		case "Verification":
			return "이메일 인증이 만료되었거나 이미 사용되었습니다. 다시 시도해 주세요.";
		default:
			return "알 수 없는 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.";
	}
};

export const getLoginErrorMessage = (query: string) => {
	switch (query) {
		case "OAuthSignin":
			return "로그인 중 문제가 발생했습니다. 잠시 후 다시 시도해 주세요.";
		case "OAuthCallback":
			return "로그인 정보를 확인하는 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.";
		case "OAuthCreateAccount":
			return "계정 생성에 문제가 발생했습니다. 잠시 후 다시 시도해 주세요.";
		case "EmailCreateAccount":
			return "이메일 계정을 생성하는 중 문제가 발생했습니다. 잠시 후 다시 시도해 주세요.";
		case "Callback":
			return "로그인 처리 중 문제가 발생했습니다. 다시 시도해 주세요.";
		case "OAuthAccountNotLinked":
			return "다른 소셜 로그인에서 사용 중인 이메일입니다.";
		case "EmailSignin":
			return "인증 이메일 전송에 실패했습니다. 이메일 주소를 확인하거나 잠시 후 다시 시도해 주세요.";
		case "CredentialsSignin":
			return "로그인 정보가 올바르지 않습니다. 확인 후 다시 시도해 주세요.";
		case "SessionRequired":
			return "로그인 후 이용할 수 있는 페이지입니다.";
		default:
			return "문제가 발생했습니다. 잠시 후 다시 시도해 주세요.";
	}
};

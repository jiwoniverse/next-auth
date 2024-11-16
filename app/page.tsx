import { Poppins } from "next/font/google";

import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

const font = Poppins({
	subsets: ["latin"],
	weight: ["600"],
});

export default function Home() {
	return (
		<main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
			<div className="space-y-6 text-center">
				<h1 className={cn("text-4xl font-semibold text-white drop-shadow-md", font.className)}>
					로그인 및 회원가입
				</h1>
				<p className="text-white text-lg">Auth.js로 인증 기능 구현하기</p>
				<div>
					<LoginButton>
						<Button variant="secondary" size="lg">
							로그인 하기
						</Button>
					</LoginButton>
				</div>
			</div>
		</main>
	);
}

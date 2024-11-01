"use client";

import { useSearchParams } from "next/navigation";

import { CardWrapper } from "@/components/auth/card-wrapper";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { getErrorPageMessage } from "@/lib/errorMessages";

export const ErrorCard = () => {
	const searchParams = useSearchParams();
	const errorQuery = searchParams.get("error");

	return (
		<CardWrapper
			headerTitle="☹️ 로그인 에러"
			headerLabel={getErrorPageMessage(errorQuery ?? "")}
			backButtonHref="/auth/login"
			backButtonLabel="로그인 페이지로 돌아가기"
		>
			<div className="w-full flex justify-center items-center">
				<ExclamationTriangleIcon className="text-destructive" />
			</div>
		</CardWrapper>
	);
};

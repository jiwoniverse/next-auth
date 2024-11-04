"use client";

import { useCallback, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { BeatLoader } from "react-spinners";

import { newVerificationToken } from "@/actions/new-verification";

import { CardWrapper } from "@/components/auth/card-wrapper";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";

export const NewVerificationForm = () => {
	const [error, setError] = useState<string | undefined>();
	const [success, setSuccess] = useState<string | undefined>();

	const searchParams = useSearchParams();

	const token = searchParams.get("token");

	const onSubmit = useCallback(() => {
		if (success || error) return;

		if (!token) {
			setError("토큰이 존재하지 않습니다!");
			return;
		}

		newVerificationToken(token)
			.then((data) => {
				setSuccess(data.success);
				setError(data.error);
			})
			.catch(() => {
				setError("알 수 없는 오류가 발생했습니다.");
			});
	}, [token, success, error]);

	useEffect(() => {
		onSubmit();
	}, [onSubmit]);

	return (
		<CardWrapper
			headerTitle="이메일 확인"
			headerLabel="입력하신 이메일로 전송된 메일을 확인해주세요."
			backButtonLabel="로그인으로 돌아가기"
			backButtonHref="/auth/login"
		>
			<div className="flex w-full items-center justify-center">
				{!success && !error && <BeatLoader color="#308edc" size={12} speedMultiplier={0.5} />}
				<FormSuccess message={success} />
				{!success && <FormError message={error} />}
			</div>
		</CardWrapper>
	);
};

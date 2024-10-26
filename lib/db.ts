import { PrismaClient } from "@prisma/client";

declare global {
	// eslint-disable-next-line no-var
	var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;

// NOTE: 프로덕션에서는 아래처럼만 선언해줘도 되지만, 개발환경에서는 Next.js hot-reload 때문에 위와 같은 설정을 해주어야 합니다. 코드가 수정될 때마다 서버가 자동으로 리로드되면서 새로운 PrismaClient 인스턴스가 생성되고, 인스턴스가 여러개 생성되면 DB 연결 수가 급격히 늘어나면서 오류 발생의 원인이 될 수 있습니다.
// export const db = new PrismaClient();

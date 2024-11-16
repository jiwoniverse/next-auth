# Next.js + Auth.js

## Stacks

- Next.js 15, TypeScript
- **Authentication**: Auth.js (NextAuth v5)
- **DB**: Prisma + Supabase
- **Form Management**: React Hook Form + Zod
- **Email Services**: Resend (for email verification, password resets)
- **UI Components**: Shadcn UI

## Features

### **인증 및 인가**

- **이메일/비밀번호 회원가입**: 이메일과 비밀번호를 통한 회원가입 및 로그인
- **OAuth 연동**: Google, Github 소셜 로그인
- **세션 관리**: NextAuth의 JWT 세션 전략을 활용해 인증 상태 유지

### **사용자 관리**

- **로그인**: OAuth 또는 이메일/비밀번호 중 선택 가능
- **회원가입**: 이메일, 비밀번호를 입력하여 계정 생성
- **이메일 인증**: 회원가입 시 입력한 이메일로 메일 전송하여 이메일 유효성 검사
- **비밀번호 초기화**: 이메일 기반 비밀번호 재설정
- **폼 관리**: React Hook Form과 Zod를 사용한 유효성 검사 및 오류 처리

### **보안 기능**

- **비밀번호 암호화**: bcryptjs로 DB에 해싱된 비밀번호 저장

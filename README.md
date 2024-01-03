# NextJS + Prisma Sample Project

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## PosgreSQL 설치 (on Mac)

```
$ brew install postgresql

```

## PosgreSQL 아이디/패스워드 생성

```
# default user로 posgre 접속
$ psql -U postgres

# 새로운 유저와 패스워드 등록
postgres=# CREATE USER myuser WITH PASSWORD 'mypassword';

# 데이타베이스를 생성할 수 있는 권한 등록
postgres=# ALTER USER myuser CREATEDB;
ALTER ROLE
```

## .env 수정

```
DATABASE_URL="postgresql://myuser:mypassword@localhost:5432/next-prisma-prj?schema=public"
```

## Prisma 명령

```
# Prisma cli를 이용하여 데이타베이스 생성
$ npx prisma migrate dev --preview-feature

# Prisma 클라이언트 라이브러리를 생성하고 업데이트
$ npx prisma generate
```

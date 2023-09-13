# nginx-deploy-dev

**서버의 원활한 배포를 위한 소스코드**

### 구현 목록

-   배포를 위한 기초적인 샘플 Node.js (Express) 서버
-   Nginx를 이용한 리버스 프록시 설정
-   Docker와 Docker Compose를 활용한 격리 환경에서의 프로세스 배포

## Configure

### 선행 설치 프로그램

**Nginx, Docker, Docker Compose 설치 필요**

### 환경변수 설정

루트 디렉토리에 .env 생성하여 환경변수 값 설정

```
SERVER_PORT=[PORT]
SERVER_URL=[URL or IP]
```

## Commands

`npm run dev` - 개발 모드로 서버 실행

`npm run build` - 서버 컴파일/빌드

`npm run start` - 서버 실행

`docker compose up -d` - 컨테이너 배포

## Connect

서버 실행 후에 미리 설정해둔 URL로 접속하여 포트 정보와 함께 메세지를 확인할 수 있습니다.

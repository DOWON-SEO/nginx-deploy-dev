# nginx-deploy-dev

**HTTP, HTTPS 프로토콜을 통한 웹 서버의 원활한 배포를 위한 소스코드**

### 구현 목록

-   배포를 위한 기초적인 샘플 Node.js (Express) 서버
-   Nginx를 이용하여 DNS 서버와 연동된 도메인 리버스 프록시 설정
-   Docker와 Docker Compose를 활용하여 격리 환경에서의 프로세스 배포
-   Certbot 사용하여 도메인에 대한 Letsencrypt SSL 인증서 발급/자동 갱신 설정

## Configure

### 선행 설치 프로그램

**Nginx, Docker, Docker Compose 설치 필요**

### 환경변수 설정

루트 디렉토리에 .env 생성하여 환경변수 값 설정

```
SERVER_PORT=[PORT]
SERVER_URL=[URL or IP]
```

### SSL 인증서 발급

SSL 인증서 발급과 자동 갱신 설정이 가능한 셸 스크립트 파일인 `init-letsencrypt.sh`를 먼저 실행해주어야 합니다. **sudo 권한이 필요합니다.**

## Commands

`npm run dev` - 개발 모드로 서버 실행

`npm run build` - 서버 컴파일/빌드

`npm run start` - 서버 실행

`docker compose up -d` - 컨테이너 배포

## Connect

웹 서버의 URL로 접속하여 내부 포트 정보와 함께 간단한 접속 확인 메세지를 볼 수 있습니다.

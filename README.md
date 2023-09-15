# nginx-deploy-dev

**HTTP, HTTPS 프로토콜을 통한 웹 서버의 원활한 배포를 구현한 소스코드**

### Repository 구성

-   배포를 위한 간단한 Node.js 예제 서버
-   격리된 환경에서의 프로세스 배포를 위하여 작성된 Docker와 Docker Compose 설정 파일
-   Nginx를 이용하여 DNS 서버와 연동된 도메인 리버스 프록시 설정
-   Certbot 사용하여 도메인에 대한 Letsencrypt SSL 인증서 발급/자동 갱신 설정

## Configure

### 선행 설치 프로그램

**Docker, Docker Compose 설치 필요**

### 환경변수 설정

.env 파일 생성하여 환경변수 값 설정

```
SERVER_PORT=[PORT]
SERVER_URL=[URL or IP]
```

### SSL 인증서 발급

SSL 인증서 발급과 자동 갱신 설정이 가능한 셸 스크립트 파일인 `init-letsencrypt.sh`를 먼저 실행해주어야 합니다. **sudo 권한이 필요합니다.**

## Commands

### 개발

`npm run dev` - 개발 모드로 서버 실행

`npm run build` - 서버 컴파일/빌드

`npm run start` - 서버 실행

### 배포

`docker compose up -d` - 컨테이너 배포

`docker compose down` - 컨테이너 중단

## Connect

웹 서버의 URL로 접속하여 내부 포트 정보와 함께 간단한 접속 확인 메세지를 볼 수 있습니다.

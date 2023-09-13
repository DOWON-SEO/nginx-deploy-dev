# Node.js 14버전 이미지 불러오기
FROM node:14

# 컨테이너 내부에서 내부 앱 디렉토리 설정
WORKDIR /usr/src/app

# 패키지 설치
COPY package*.json ./

RUN npm install

# 파일 전체 복사
COPY . .

# 앱 빌드
RUN npm run build

# 컨테이너 내부에서 실행할 커맨드 설정
CMD ["npm", "start"]
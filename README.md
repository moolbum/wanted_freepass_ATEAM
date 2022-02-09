<h1>원티드 프리온보딩 코스 2주차 첫번째 과제</h1>

<br>

## 팀 소개

### 1조 FreePass

| 팀원  
| --------------------------------------------------- | ------ |
| 양주영 [@yangddu](https://github.com/yangddu)  
| 이용우 [@moolbum](https://github.com/moolbum)  
| 홍유진 [@howyoujini](https://github.com/howyoujini)
<br>

## 프로젝트 설명

- 요청서 구현하기

## 프로젝트 실행 방법

1. git clone
   ```bash
   git clone https://github.com/moolbum/wanted_freepass_ATEAM.git
   ```
2. 패키지 설치
   ```bash
   npm install
   ```
3. local 프로젝트 실행
   ```bash
   npm start
   ```

<br>

## Tools

```
- View (React.js, TypeScript, , Styled-components)
- Build Tool (Create React App)
- Code Quality Tool (Prettier)
- Other Tools (Git, Github, notion, Slack. AWS)
```

### 양주영

- nav (반응형)
- '상담 중인 요청만 보기' 토글을 활성화하면 데시보드에 '상담중' 뱃지가 달려있는 카드 노출

### 이용우

- 카드 컴포넌트, 전체 레이아웃 (반응형)
- json-server로 데이터 추가

### 홍유진

- 필터가 선택되면, 해당 방식 조건이 포함된 카드 노출
- 필터가 둘 다 선택되면, 두 조건의 교집합 노출

<br>

## 📂 디렉토리 구조

```bash
.
├── assets
├── components
│   ├── Card
│   ├── Filter
│   ├── Nav
│   └── Toggle
│  
├── hooks
├── pages
│   └── Board
│       └── NoRequest
├── styles
└── utils
```

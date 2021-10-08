<h2>🎬 영화 검색 웹앱 프로젝트 - React Hooks 🎫</h2>
<br>
<br>
<!-- ### `npm start` -->

<h2>🧾 TO-DO </h2>

- [x] 영화 api로 데이터 불러오기
- [x] HOME - 최신 영화 목록
- [x] SEARCH - 영화 검색 기능
- [x] 상세페이지 구현
- [x] light/dark 모드
- [x] responsive
- [ ] 로딩 표시
- [ ] 무한 스크롤
    <br><!---->
    <br> <!---->
<h2>🧾 PLAN</h2>

<h3>📌 1 일차</h3>

- [x] 디렉토리 구조
- [x] api 이용 데이터 불러오기
- [x] HOME - 최신 영화 목록 불러오기
- [x] SEARCH - 영화 검색 기능
- [x] movie item&list, search_header ui 구현
- [x] 상세페이지 구현
      <br>

<h3>📌 2 일차</h3>

- [x] responsive 기능 구현
- [x] dark mode 기능 구현

<h3>📌 3 일차</h3>

<!-- - [ ] ''에 대한 검색결과 -->
<!-- - [ ] 상세페이지에서 홈으로 이동 (react-router dom) -->

- [ ] 무한 스크롤
- [ ] 로딩 표시

<br>

<h2>💻기능구현</h2>

<b>1. HOME - 최신영화목록 불러오기</b>
<br>
useEffect() 를 사용해서 페이지가 렌더링되면 바로 최신영화목록을 볼 수 있도록 구현
<br>
<br>

<b>2. 상세페이지 구현시 겪은 문제</b>
<br>
<br>
<b>3. Dark Mode 기능 구현🌓</b>

- HTML에 data-theme 속성 부여
- switch 클릭 시 현재 localStorage에 저장된 theme의 상태에 따라 light/dark모드로 변경 <br>
  -> localStorage 에 theme 저장 <br>
  -> useState 사용해서 theme 업데이트

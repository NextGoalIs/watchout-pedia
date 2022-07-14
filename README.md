# Watchout Pedia(왓챠피디아 클론 코딩)

React와 TypeScript, 그리고 라이브러리들을 연습해보기 위해 만든 왓챠피디아 클론코딩입니다. 서버는 구현하지 않았고, [TMDB](https://www.themoviedb.org/?language=ko)의 API를 이용하였습니다.

> 현재 Router로 인한 오류로 영화(메인)페이지, 영화 상세 페이지만 열람 가능합니다. 최대한 빨리 수정하도록 하겠습니다.

![movie](https://user-images.githubusercontent.com/75665640/178959717-54fe8f3e-2eba-4a98-bc76-22313a33625e.PNG)
- */movie*
![tv](https://user-images.githubusercontent.com/75665640/178959726-6fe05720-c190-459a-9141-25b5f88b33a2.PNG)
- */tv*
![movie detail](https://user-images.githubusercontent.com/75665640/178959729-9396d089-d453-40a6-84a9-c1d92ef66955.PNG)
- */movie/id*


## 구현 사항

- 클라이언트 사이드 랜더링
- 영화, TV 그리고 각각의 상세 페이지 총 4페이지.
- 검색기능 구현

### 기술 스택 및 세부 구현 사항

- TypeScript & React
- emotion을 이용하여 styled component
  - emotion이 SSR에서 별도의 설정 없이 사용 가능하다는 점을 높게 보아 연습겸 사용
- axios를 이용하여 API 사용
- react-slick을 이용하여 슬라이더 제작
- react-query를 이용하여 데이터 페칭

# 🎬영화 추천 플랫폼 구현 project

# ☁️ WWM : Weather-With-Movie

## 1. 팀원

| 이름   | 역할 및 업무                                                                              |
| ------ | ----------------------------------------------------------------------------------------- |
| 손민영 | - Back-end \| Vue 클라이언트 구현<br>- Front-end \| Django 서버 구현(movies, accounts)    |
| 신종혁 | - Front-end \| Vue 클라이언트 구현<br>- Back-end \| Django 서버 구현(community, accounts) |

##

## 2. 프로젝트 기간 및 주제

- 2023.05.17(수) ~ 2023.05.26(금)
- 영화 추천 알고리즘 기반 커뮤니티 서비스

### 프로젝트 목표

- 영화 데이터 기반 추천 서비스 구성
- 영화 추천 알고리즘 구성
- 커뮤니티 서비스 구성
- 서비스 관리 및 유지보수

##

## 3. 기술 스택

### 개발 Tool

- Back-end : Pythohn, Django REST Framework, Django-alluth, Django-cors-headers
- DB : SQLite
- Front-end : Vue.js, Vuex, CSS

### 협업 Tool

- Gitlab
- Notion

##

## 4. 데이터베이스 모델링

### ERD

![Untitled.png](README_asset/c0d6100c20ac16810b68e850d2b22078b405c34b.png)

## 5. 프로젝트 주요 기능

### 주요 기능

- 영화 데이터 기반 추천 서비스
  - 전체 영화 목록
  - 영화 검색
- 알고리즘 기반 영화 추천 서비스
  - 오늘의 영화
  - 인기 영화
  - 날씨 기반 추천 영화
- 커뮤니티
  - 영화 리뷰 게시글 및 댓글 CRUD
  - 영화 좋아요
- 추가 페이지
  - 현재 위치 날씨
  - 영화 월드컵
- 서비스 관리 및 유지 보수
  - 웹 페이지 속도
  - 페이지 오류

##

## 7. 상세 페이지

### 7-1. 첫 화면 & 로그인/회원가입 화면

![Untitled 1.png](README_asset/WWM_LOGIN.gif)

- 첫 화면 & 로그인 화면
  - 로그인을 해야만 이용할 수 있는 서비스로, sign up 버튼 클릭 시 회원가입 창 연결
  - 정확한 정보를 입력하지 않으면 alert를 통해 정확한 정보를 입력하도록 안내

![Untitled 2.png](README_asset/WWM_SIGNUP.gif)

- 회원 가입 화면
  - id, nickname, birth, password 각각 알맞은 형태의 정보를 입력하지 않거나 비밀번호 확인 오류 시 alert를 통해 각 상황에 맞는 오류 안내

### 7-2. 메인 & 인트로 페이지

![WWM_Main.png](README_asset/WWM_Main.png)

- 메인 화면

  - 처음 들어올 시 사이트 로고와 particle.js 를 활용한 우주 배경을 통해 사이트 안내
  - Enter 버튼 클릭 시 login 화면으로 이동

![WWM_Main.png](README_asset/WWM_INTRO.gif)

- 인트로 화면

  - 처음 들어올 시 사이트 로고와 particle.js 를 활용한 우주 배경을 통해 사이트 안내
  - Enter 버튼 클릭 시 login 화면으로 이동

### 7-3. 영화 데이터 기반 추천 서비스

![Untitled 11.png](README_asset/WWM_LIST.gif)

- 메인 화면

  - 처음 들어올 시 사이트 로고와 particle.js 를 활용한 우주 배경을 통해 사이트 안내
  - Enter 버튼 클릭 시 login 화면으로 이동

![Untitled 11.png](README_asset/WWM_SEARCH.gif)

- 메인 화면

  - 처음 들어올 시 사이트 로고와 particle.js 를 활용한 우주 배경을 통해 사이트 안내
  - Enter 버튼 클릭 시 login 화면으로 이동

### 7-4. 알고리즘 기반 영화 추천 서비스

![Untitled 11.png](README_asset/WWM_TODAY.gif)

- 메인 화면

  - 처음 들어올 시 사이트 로고와 particle.js 를 활용한 우주 배경을 통해 사이트 안내
  - Enter 버튼 클릭 시 login 화면으로 이동

![Untitled 11.png](README_asset/WWM_POPULAR.gif)

- 메인 화면

  - 처음 들어올 시 사이트 로고와 particle.js 를 활용한 우주 배경을 통해 사이트 안내
  - Enter 버튼 클릭 시 login 화면으로 이동

![Untitled 11.png](README_asset/WWM_WEATHER.gif)

- 메인 화면

  - 처음 들어올 시 사이트 로고와 particle.js 를 활용한 우주 배경을 통해 사이트 안내
  - Enter 버튼 클릭 시 login 화면으로 이동

### 7-5. 커뮤니티

![Untitled 11.png](README_asset/WWM_REVIEW.gif)

- 메인 화면

  - 처음 들어올 시 사이트 로고와 particle.js 를 활용한 우주 배경을 통해 사이트 안내
  - Enter 버튼 클릭 시 login 화면으로 이동

![Untitled 11.png](README_asset/WWM_COMENT.gif)

- 메인 화면

  - 처음 들어올 시 사이트 로고와 particle.js 를 활용한 우주 배경을 통해 사이트 안내
  - Enter 버튼 클릭 시 login 화면으로 이동

![Untitled 11.png](README_asset/WWM_LIKE.gif)

- 메인 화면

  - 처음 들어올 시 사이트 로고와 particle.js 를 활용한 우주 배경을 통해 사이트 안내
  - Enter 버튼 클릭 시 login 화면으로 이동

### 7-6. 추가 기능

![Untitled 11.png](README_asset/WWM_FAVORITE.gif)

- 메인 화면

  - 처음 들어올 시 사이트 로고와 particle.js 를 활용한 우주 배경을 통해 사이트 안내
  - Enter 버튼 클릭 시 login 화면으로 이동

![Untitled 11.png](README_asset/WWM_LIKE.gif)

- 에러 화면

  - 처음 들어올 시 사이트 로고와 particle.js 를 활용한 우주 배경을 통해 사이트 안내
  - Enter 버튼 클릭 시 login 화면으로 이동

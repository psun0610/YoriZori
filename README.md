# 요리조리

> *경북대학교 소프트웨어학과 졸업프로젝트*

<br/>



# 📜1. 개요

**요리조리**는 냉장고 관리와 레시피 추천을 도와주는 반응형 웹사이트입니다. 주요 기능은 다음과 같습니다.

1. 사용자의 냉장고 **식재료 관리**
2. 보유 식재료를 바탕으로 **레시피 추천**
3. 장을 볼 때 참고할 수 있는 **장바구니 리스트** 

<img src="https://github.com/user-attachments/assets/034b7a2c-429d-4989-9620-7a64df1f9007" alt="요리조리 로고 small" height=200 />

<br/>



# 🔎2. 프로젝트 기획 동기

자취생으로 살면서 항상 "오늘 뭐 먹지?"가 가장 큰 고민이었습니다.
지금 내 냉장고에 있는 재료를 한 눈에 관리하면서 레시피도 추천받을 수 있는 앱이 있으면 자취생들에게 아주 편할 것 같았습니다.

개발을 하기 전에 먼저 기존 시스템을 찾아보았습니다.
만개의 레시피, 원더 프리지와 같은 냉장고 어플들을 위주로 찾아보았습니다.
많은 앱들이 냉장고 재료를 관리해주는 기능은 있으나 그 재료를 기반으로 레시피 추천을 해주진 않는다거나, 반대로 레시피 추천은 많지만 재료 기반 추천 기능은 없었습니다.

그래서 **"나의"** 냉장고 관리와 **"내가"** 가진 재료를 이용한 레시피 추천 기능을 합친 **요리조리**를 개발하게 되었습니다.

<br/>



# 🧑‍💻3. Contributor
<div style="display:flex; justify-content:center;">
  <a href="https://github.com/seunggi99"><img src="https://github.com/user-attachments/assets/632b98bb-587b-4903-9488-1013c6cd4bfa" height="150"/></a>
  <a href="https://github.com/zzihoos"><img src="https://github.com/user-attachments/assets/42a6f748-7349-4cf4-94ae-6e14d443538a" height="150"/></a>
  <a href="https://github.com/psun0610"><img src="https://github.com/user-attachments/assets/9ddc6e86-f8c2-4817-bf56-f1129f6947fb" height="150"/></a>
</div>

<br/>

# ⚙️4. 프로젝트 소개

- 🗓️**프로젝트 기간**
  - 2024년 1월 ~ 2024년 6월
  
- **🚩개인 개발 목표**
  
  - React 프레임워크 컴포넌트 사용법을 익히고 자바스크립트와 scss 익숙해지기
  - 팀원들과의 협업에 익숙해지기 
  
- ⭐**개발 역할 분담**
  - 백엔드: 김승기
  - 프론트엔드: **박선영**(팀장), 신지호

- 🖥️**사용 기술**
  - 백엔드
    <img src="https://img.shields.io/badge/JAVA-FF7800?style=for-the-badge&logo=Java&logoColor=white"/> <img src="https://img.shields.io/badge/SpringBoot-6DB33F?style=for-the-badge&logo=Springboot&logoColor=white"/> <img src="https://img.shields.io/badge/Spring Security-6DB33F?style=for-the-badge&logo=Springsecurity&logoColor=white"/> <img src="https://img.shields.io/badge/spring scheduler-6DB33F?style=for-the-badge&logo=springscheduler&logoColor=white"/>
    <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white"/> <img src="https://img.shields.io/badge/spring Data JPA-000000?style=for-the-badge&logo=spring&logoColor=white"/>
    <img src="https://img.shields.io/badge/Amazon EC2-FF9900?style=for-the-badge&logo=AmazonEC2&logoColor=white"/> <img src="https://img.shields.io/badge/Amazon RDS-527FFF?style=for-the-badge&logo=Amazon RDS&logoColor=white"/>
  - 프론트엔드
    
    <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=black"/> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"/> <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=Prettier&logoColor=darkred"/> <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/> <img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/> <img src="https://img.shields.io/badge/SASS-CC6699?style=for-the-badge&logo=sass&logoColor=white"/> <img src="https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"/>
    
  - 협업
  
    <img src="https://img.shields.io/badge/GITHUB-181717?style=for-the-badge&logo=github&logoColor=white"/> <img src="https://img.shields.io/badge/GITHUB-5865F2?style=for-the-badge&logo=discord&logoColor=white"/> <img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white"/>

<br/>



# 🔗5. ERD

![image](https://github.com/user-attachments/assets/5283c3b2-a6ae-46f0-bc14-489e925a9ce6)

<br/>



# 📋6. 기능 소개

- [6.1 회원가입](##📌6.1-회원가입)
- [6.2 로그인](##📌6.2-로그인)

- [6.3 기피음식 등록](##📌6.3-기피음식-등록)
- [6.4 메인페이지](##📌6.4-메인페이지)
- [6.5 나의 냉장고](##📌6.5-나의-냉장고)
  - [6.5.1 재료 추가](###6.5.1 재료 추가)
  - [6.5.2 재료 수정/삭제](###6.5.2 재료 수정/삭제)
- [6.6 마이페이지](##📌6.6 마이페이지)
- [6.7 레시피 리스트](##📌6.7 레시피 리스트)
- [6.8 레시피 상세](##📌6.8 레시피 상세)
- [6.9 장바구니](##📌6.9 장바구니)
- [6.10 북마크 모음](##📌6.10 북마크 모음)



<br/>



## 📌6.1 회원가입

다음에 Validation 처리를 합니다.

- 이미 존재하는 아이디
- 비밀번호 불일치

![01 회원가입](https://github.com/user-attachments/assets/e843a30c-3314-4c12-84b5-812320ae0768)

<br/>



## 📌6.2 로그인



![07 로그인](https://github.com/user-attachments/assets/441c81bc-0942-4abb-8911-be16b5b338ac)

## 📌6.3 기피음식 등록

회원가입 이후 바로 기피음식을 등록합니다.

- 기피음식으로 등록한 재료들의 레시피는 사용자에게 보여주지 않습니다.

- **여러 개** 한번에 등록이 가능합니다.
- **검색어 검색**과 **카테고리 검색**을 이용할 수 있습니다.

<img src="https://github.com/user-attachments/assets/cc748aed-d4ac-482a-9bc0-4c3e5d52c9c0" alt="02 기피음식" style="zoom:80%;" />

<br/>



## 📌6.4 메인 페이지

- 소비기한 임박 재료 알림
  - **소비기한이 3일 이하 남은 재료**가 있으면 띄웁니다. (그림2 참고)

- 오늘의 추천 레시피
  - 24시간(하루) 기준으로 추천 레시피 random으로 변경됩니다.

<table>
  <tr>
    <td valign="top"><img src="https://github.com/user-attachments/assets/5ba20098-0bd6-45ae-8058-040e8a3f5595" alt="image" style="zoom:80%;" /></td>
    <td valign="top"><img src="https://github.com/user-attachments/assets/a0e0a9bf-138f-4caa-8fdb-5270635e3907" alt="image" style="zoom:80%;" /></td>
  </tr>
  <tr>
    <td><p align="center"><사진 1> Default</p></td>
    <td><p align="center"><사진 2> 소비기한 3일 남은 재료가 있는 경우</p></td>
  </tr>
</table>


<br/>
      
## 📌6.5 나의 냉장고

냉장고 재료를 한눈에 볼 수 있습니다.

- 보관 방법 (실온, 냉장, 냉동)에 따라 나뉘어집니다.
- 카테고리에 따라 조회할 수 있습니다.
- 소비기한이 3일 이하로 남은 재료는 디데이 뱃지가 빨간색으로 변경됩니다.

<img src="https://github.com/user-attachments/assets/7917fecf-8904-4845-b6bb-fe5629b0af5a" alt="image" style="zoom:80%;" />

<br/>

### 6.5.1 재료 추가

- 재료 검색어 검색, 카테고리 검색이 가능합니다.
- **보관 방법**을 선택합니다.
  - 냉동 보관시 소비기한은 선택할 수 없습니다.
- **등록일과 소비기한**을 입력합니다.
  - 재료 선택시 **기본 소비기한**이 바로 입력됩니다.


<table>
  <tr>
    <td valign="top"><img src="https://github.com/user-attachments/assets/de5fe9fc-5f39-47b8-a134-e462215bd006" alt="03 재료추가1" style="zoom:80%;" /></td>
    <td valign="top"><img src="https://github.com/user-attachments/assets/bd0f9696-f871-4653-a103-dd53a8779bd5" alt="03 재료추가2" style="zoom:80%;" /></td>
  </tr>
  <tr>
    <td><p align="center"><영상 1> 소비기한 2일, 냉장</p></td>
    <td><p align="center"><영상 2> 소비기한 일주일, 냉장</p></td>
  </tr>
  <tr>
    <td valign="top"><img src="https://github.com/user-attachments/assets/f0d0fe31-94e4-4409-b13b-6237657f59c8" alt="03 재료추가1" style="zoom:80%;" /></td>
    <td valign="top"><img src="https://github.com/user-attachments/assets/7f28038d-7382-4cd2-8676-3137f3965898" alt="03 재료추가2" style="zoom:80%;" /></td>
  </tr>
  <tr>
    <td><p align="center"><영상 3> 냉동 재료</p></td>
    <td><p align="center"><영상 4> 실온 재료</p></td>
  </tr>
</table>
<br/>



### 6.5.2 재료 수정/삭제

![04 재료수정삭제](https://github.com/user-attachments/assets/331a4574-e5ee-4f02-b656-4437b00c2953)


<br/>



## 📌6.6 마이페이지

![image](https://github.com/user-attachments/assets/f3b1fbcf-eef8-40f7-97c5-a49a49f63fb0)

<br/>



## 📌6.7 레시피 리스트

- 재료 검색어 검색, 카테고리 검색이 가능합니다.
- 부족한 재료 적은 순으로 오름차순 정렬됩니다.

![image](https://github.com/user-attachments/assets/9da89c9f-35b6-4b74-ba34-bf0d51c9639e)

<br/>



## 📌6.8 레시피 상세

- 레시피 북마크 버튼이 있습니다.
- 부족한 재료(가지고 있지 않은 재료) 한번에 장바구니 전송하는 버튼이 있습니다.

![05 레시피상세](https://github.com/user-attachments/assets/89f0497e-cc51-4880-b793-1e381d629582)

<br/>



## 📌6.9 장바구니

- 장바구니에서 전체 삭제할 때 고정해놓은 재료는 삭제되지 않습니다.

![06 장바구니](https://github.com/user-attachments/assets/5195e8c8-5fa8-4aff-8a7f-76d460db2fbb)

<br/>



## 📌6.10 북마크 모음

- 북마크 저장된 레시피 표시

![image](https://github.com/user-attachments/assets/aa605b67-74d6-420a-a5e0-48f519fcdd35)


<br/>



# 💡느낀점과 배운점

-

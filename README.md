# 🌤️ Todo List with Weather & Quotes  

## 📌 학습 목표 
**JavaScript 기본 학습을 바탕으로 만든 Todo List 웹 애플리케이션입니다.**  
- 배경 화면이 **새로고침 할 때마다 강아지/고양이 버전으로 변경**됩니다.  
- **날짜와 현재 시간을 표시**합니다.  
- **OpenWeather API를 활용하여 현재 위치의 날씨 정보를 표시**합니다.  
- **랜덤 명언(영어 & 한글 번역)을 제공**합니다.  
- **할 일 목록을 추가/삭제**할 수 있습니다.  

## 🖼️ 프로젝트 화면  
### 🐶 강아지 버전  
![강아지 버전](https://github.com/songwoohee/vanilla-js-chrome-app/blob/main/finalAssignment/dogTodoList.jpg)

### 🐱 고양이 버전  
![고양이 버전](https://github.com/songwoohee/vanilla-js-chrome-app/blob/main/finalAssignment/catTodoList.jpg)

## 🛠️ 주요 기능  
- ✅ **로그인 기능**: 사용자 닉네임을 입력하면 화면에 표시됩니다.  
- 🕒 **현재 시간 및 날짜 표시**: 실시간으로 업데이트됩니다.  
- 🌄 **랜덤 배경화면 변경**: 새로고침 시 강아지/고양이 테마 랜덤 적용  
- 🌦 **날씨 정보 가져오기**: OpenWeather API를 활용하여 위치 기반 날씨 표시  
- 📝 **To-Do List 관리**: 할 일 추가/삭제, `localStorage`에 저장  
- 💡 **랜덤 명언 제공**: 새로고침 시 새로운 명언 표시  

## 🔧 사용한 기술  
- **Frontend**: HTML, CSS, JavaScript  
- **API**: OpenWeatherMap API (날씨 정보)  
- **Storage**: LocalStorage (사용자 이름, 할 일 목록 저장)  
- **JavaScript 기능**: `Date`, `fetch()`, `localStorage`, `setInterval()`, `Math.random()` 등  

## 🚀 정리
이 프로젝트를 통해 다음과 같은 개념을 배웠습니다.
- JavaScript에서 **localStorage**를 활용하여 데이터를 저장하고 불러오는 방법
- **fetch()를** 사용하여 API 데이터를 가져오는 방법
- **navigator.geolocation을** 활용하여 사용자 위치를 얻는 방법
- **외부 API**를 활용해서 날씨 정보를 얻는 방법
- **setInterval()을** 사용하여 실시간으로 시계를 업데이트하는 방법
- **Math.random()을** 이용해 랜덤으로 배경화면을 변경하는 방법

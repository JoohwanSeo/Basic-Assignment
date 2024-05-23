//문제8) 로컬스토리지 사용하기

const user = {
  이름: "병수",
  나이: 20,
  주소: "시골",
};
// 1.user 데이터를 로컬스토리지에 저장. 이때 로컬 스토리지의 key는 user로 저장
localStorage.setItem("user", JSON.stringify(user));

// 2.로컬 스토리지에 저장된 데이터(user)를 조회한 후 콘솔에 출력. 단, 문자열이 아니라 객체로 출력
console.log(JSON.parse(localStorage.getItem("user")));

// 3. 조회한 로컬 스토리지 데이터의 나이를 30으로 변경 후 다시 로컬 스토리지에 저장
const userChnageInfo = JSON.parse(localStorage.getItem("user"));

// 4. 조회한 로컬 스토리지의 데이터(user)를 삭제하는 코드를 작성하는 코드를 작성해. 그리고 다시 user 데이터 조회 후 null이 출력되는지 확인

localStorage.removeItem("user");
console.log(JSON.parse(localStorage.getItem("user")));

// 문제1) 아래 API 문서를 확인하고, 게시물 목록을 조회하여 콘솔에 출력해보세요

// https://jsonplaceholder.typicode.com/posts

fetch(" https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

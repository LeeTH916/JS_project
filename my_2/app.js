const title = document.getElementById("title");
title.innerText = "Got you!";
console.dir(title);

console.log(title.id);
console.log(title.className);

const hellos = document.getElementsByClassName("hello");
console.log(hellos);

const tag=document.getElementsByTagName("h1");
console.log(tag);

const _title = document.querySelector(".hello h1");  // 해당 클래스의 h1의 첫번째 elment만 가져옴
// const _title = document.querySelectorAll(".hello h1"); // 다 가져옴(배열로)
// const _title = document.querySelector("#hello h1");  // 해당 id의 h1의 첫번째 elment만 가져옴 -> document.getElementById("hello") 와 같음
console.log(_title);
_title.innerText="Hello";
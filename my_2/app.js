const title = document.getElementById("title");
title.innerText = "Got you!";
console.dir(title);

console.log(title.id);
console.log(title.className);

const hellos = document.getElementsByClassName("hello");
console.log(hellos);

const tag=document.getElementsByTagName("h1");
console.log(tag);

const h1 = document.querySelector(".hello h1");  // 해당 클래스의 h1의 첫번째 elment만 가져옴
// const h1 = document.querySelectorAll(".hello h1"); // 다 가져옴(배열로)
// const h1 = document.querySelector("#hello h1");  // 해당 id의 h1의 첫번째 elment만 가져옴 -> document.getElementById("hello") 와 같음
console.log(h1);
h1.innerText="Hello";


function handleTitleClick(){
    console.log("title was clicked!");
    // const currentColor = h1.style.color;
    // let newColor;
    // if(currentColor === "blue"){
    //     newColor ="tomato";
    // } else{
    //     newColor = "blue";
    // }
    // h1.style.color = newColor;

    const clickedClass = "active";
    // if(h1.classList.contains(clickedClass)){
    //     h1.classList.remove(clickedClass);
    // } else{
    //     h1.classList.add(clickedClass);
    // }
    h1.classList.toggle(clickedClass);
}

// function handleMouseEnter(){
//     console.log("mouse is here!");
//     h1.innerText="Mouse is here!";
// }

// function handleMouseLeave(){
//     h1.innerText="Mouse is gone!";
// }

// function handleWindowREsize(){
//     document.body.style.backgroundColor = "tomato";
// }

// function handleWindowCopy(){
//     alert("copier!");
// }

// function handleWindowOffline(){
//     alert("SOS no WiFi!");
// }

// function handleWindowOnline(){
//     alert("ALL GOOD!");
// }

//h1.addEventListener("click",handleTitleClick);
h1.onclick = handleTitleClick;
// h1.addEventListener("mouseenter",handleMouseEnter);
// h1.addEventListener("mouseleave",handleMouseLeave);

// window.addEventListener("resize",handleWindowREsize);
// window.addEventListener("copy",handleWindowCopy);
// window.addEventListener("offline",handleWindowOffline);
// window.addEventListener("online",handleWindowOnline);

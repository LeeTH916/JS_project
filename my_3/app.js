const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

// const loginInput = document.querySelector("#login-form input");
// const loginbutton = document.querySelector("#login-form button");

const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    console.log(event);

    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    loginForm.classList.add("hidden");
    console.log(username);
    // greeting.innerText = "Hello " + username;
    paintGreeting(username);

    // if(username === ""){
    //     alert("Please write your name");
    // } else if(username.length>15){
    //     alert("Your name is too long.");
    // } // 입력이 적절한지 확인 -> html에서 form을 통해 기본적으로 제공
}

function handleLinkClick(event){
    console.log(event);
    event.preventDefault();
    alert("Clicked");
}

function paintGreeting(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

link.addEventListener("click",handleLinkClick);

const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername === null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit)
} else{
    // show the greeting
    paintGreeting(savedUsername)
}


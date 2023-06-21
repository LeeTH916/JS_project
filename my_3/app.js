const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

// const loginInput = document.querySelector("#login-form input");
// const loginbutton = document.querySelector("#login-form button");

const link = document.querySelector("a");

function onLoginSubmit(event){
    event.preventDefault();
    console.log(event);

    const username = loginInput.value;
    console.log(username);

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

loginForm.addEventListener("submit", onLoginSubmit)
link.addEventListener("click",handleLinkClick);




function handleEventWindowResize(){
    if(window.outerWidth<700){
        body.classList.add("one");
        body.classList.remove("two");
    } else if(window.outerWidth<1200){
        body.classList.add("two");
        body.classList.remove("three");
        body.classList.remove("one");
    } else {
        body.classList.add("three");
        body.classList.remove("two");
    }
    console.log("changed");
}
const body = document.querySelector(".body");
console.log(body);
window.addEventListener("resize",handleEventWindowResize);

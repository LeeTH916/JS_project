const a = 5;
const b = 2;

const veryLongVariableNmae = 0;
let myName = "taehun";

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello " + myName);

myName = "leetaehun";
console.log("your new name is " + myName);

const amIFat = true;
const c = null;
let something;
console.log(amIFat);
console.log(something);
console.log(c);

const daysOfWeek = ["mon", "tue","wed","thu","fri","sat"];
// Get Item from Array
console.log(daysOfWeek[4]);
console.log(daysOfWeek);

// Add one more day to the array
daysOfWeek.push("sun")
console.log(daysOfWeek);

const player = {
    name : "nico",
    points : 10,
    fat : true,
};

console.log(player);
console.log(player.name);
console.log(player["name"]);
player.lastName="potato";
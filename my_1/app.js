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

function sayHello(nameOfPerson, age) {
    console.log("Hello my name is " + nameOfPerson +" and I'm " + age);
}

sayHello("taehun", 24);

function plus(firstNumber, secondNumber){
    console.log(firstNumber + secondNumber);
}

function divide(a,b){
    console.log(a/b);
}

plus(8, 60);
divide(98, 20);

const player1 = {
    name:"taehun",
    sayHello:function(OtherPersonsName) {
        console.log("hello! "+ OtherPersonsName + " nice to meet you");
    },
};

console.log(player1.name);
player1.sayHello("Lee");

const calculator = {
    add:function(a,b){
        return a+b;
    },
    minus:function(a,b){
        return a-b;
    },
    times:function(a,b){
        return a*b;
    },
    divide:function(a,b){
        return a/b;
    },
    powerof:function(a,b){
        return a**b;
    },
};

const plusResult = calculator.add(4,2);
const minusResult = calculator.minus(plusResult,2);
const timesResult = calculator.times(4,minusResult);
const divideResult = calculator.divide(timesResult,plusResult);
const powerofResult = calculator.powerof(divideResult,minusResult);



const age = 99;
function calculateKrAge(ageOfForeigner){
    return ageOfForeigner + 2;
}

const KrAge = calculateKrAge(age);
console.log(KrAge);

const myAge = parseInt(prompt("How old are you?"));

if(isNaN(myAge) || age < 0){
    console.log("Please write a real positive number");
} else  if(myAge < 18){
    console.log("You are too young");
} else if(myAge>=18 && myAge<=50){
    console.log("You can drink")
} else if (myAge >50 && myAge<=80){
    console.log("You should exercise")
} else if (myAge === 100) {
    console.log("wow! you are wise");
} else if (myAge>80){
    console.log("You can do whatever you want");
} 
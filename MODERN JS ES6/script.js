/* const javascript = {
    name: 'Javascript',
    libraries:['React' , 'Angular' , 'Vue'],

    printLibraries: function(){
        this.libraries.forEach((a)=> console.log(`${this.name} loves ${a}`));
    }
};


javascript.printLibraries();



const searchInput = document.querySelector(".search")
const display = document.querySelector(".result")
const thanks = document.querySelector(".thanks")
// nornmal Function tat works perfectly


// function show() {
//     display.innerHTML = this.value;
//     setTimeout(function() {
//     thanks.innerHTML = `You have typed: ${this.value}`;
//     } , 1000) ;
// }

 const show = () => {
    console.log(this)
    display.innerHTML = this.value;
    setTimeout(function() {
    thanks.innerHTML = `You have typed: ${this.value}`;
    } , 1000) ;
}

searchInput.addEventListener("keyup" , function() {
    console.log(this)
    // display.innerHTML = this.value;
    setTimeout(()=> {
    console.log(this);
    } , 500) ;
});

console.log('---------------')


const person = {
    name: 'Hasib',
    age : 30,
    printNameFunction: function(){
        console.log(this.name + "1")
        setTimeout( function(){console.log(this)} ,500);
    },
    printNameArrow: function(){
        console.log(this.name+ "2")
        setTimeout( ()=>{console.log(this)} ,1000);
    } 
}

person.printNameFunction();
person.printNameArrow();
 */


console.log('--------------')
const numbers = [1,2,3,4];

const sum = numbers.reduce( (prev , curr)=>{
    console.log(prev ,curr);
    return prev * curr;
} ,1);

console.log(sum)

const $styles = "dollar";
console.log($styles)

function myfnc(x = 10) {
    return x;
}
console.log(myfnc(null))
let a = [...numbers];
console.log(numbers)
console.log(a);
console.log(numbers.push(5));
console.log(numbers)
console.log(a);

const person = {
    name: "hasib",
    last: "nasif"
}
const newp = {
    shawa: "hasdfsdfsib",
    mawa: "nassdfdsfif"
}

console.log({...person,...newp
})
//rest operator 

function myFunc(a, b,...params) {
    console.log(params)
}

myFunc(5,6,7,8,9)


// destructuring 

const user = {
    id: 335,
    name: "sakin",
    age:34,
    // education: {
    //     degree: "Masters",
    // },
}

const {age: title} = user;

console.log( title);


const  {education : {degree: hasib} = {} } = user;
console.log(hasib);


// Array destructuring

let num = [1,2,[3,100,500],4,5,6,7];

[ , , [,a,b] ] = num;
console.log(a,b);

// swaping using destructuring

let x = 1;
let y = 1;

[y , x] =  [ x ,y];

console.log(x,y)


// import export

import {pi,a} from './external.js';

console.log(pi ,a)

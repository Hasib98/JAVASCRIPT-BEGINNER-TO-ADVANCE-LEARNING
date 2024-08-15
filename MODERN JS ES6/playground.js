/* // import export

import gg, {kawaa as pi , doggy as kutto} from "./external.js";

console.log( pi,kutto );
gg();
 

function modifier(strings , ...values) {
 const m = strings.reduce((prev, current)=>{
    return prev+current +( values.length ? "Mr. " + values.shift() : "")
 } , "");
    return m ;
}

let player1 = "Sakib";
let player2 = "Tamim";
let player3 = "dalal";

console.log(modifier`we have ${player1} and and ${player2} and ${player3} in our team.`);

const ws = new WeakSet([ {a : 1}, {b : 2 }]);
 console.log(ws)

const arr = ['Javascript' , 'PHP' , 'Python' , 'Ruby' , 'C++' , 'RUST'];
console.log(arr)
const test = [...arr];

console.log(test);

test.copyWithin(-3, -5,-4);

console.log("-----------")
console.log(test)
console.log(arr);

globalThis.setTimeout(()=> console.log('hello') , 100)

console.log(BigInt(Number.MAX_SAFE_INTEGER) +1n )
// -9007199254740991
//  9007199254740991

const language =  {
    name: 'js',
    creator: 'Brenden Eich',
    library: {
        react: {
            company: 'facebook'
        }
    }
};

let company = language?.library?.react?.company;
console.log(company)
let color  = ['red' , 'green' , 'blue'];
color = null;

console.log(color?.[1]);

let php  = "hasbbbb";
php = NaN;
console.log(php ?? "php")


const nm = 9007199254740991;
const str = nm.toString();
const newArr = str.split("");

const reverse = newArr.toReversed();

console.log(newArr);
console.log(reverse)


console.log("----------");

const removed  = newArr.toSpliced( 2, 2, '100','400');
console.log(newArr)
console.log(removed)


const ress = newArr.with(1 , 400);
console.log(ress);

 */
const languages  = [
    {title: 'Javascript' , type: 'scripting' },
    {title: 'Java' , type: 'normal' },
    {title: 'Python' , type: 'scripting' }
]

let scriptingLanguages = {};

scriptingLanguages = Object.groupBy(languages , (lang)=> {
    return lang.type;
});
console.log(scriptingLanguages);

for( let i = 0 ; i < 10 ; i++) {
    console.log(i);
    setTimeout(() => {
        console.log(i);
    } , 100);
}

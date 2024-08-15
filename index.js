let firstName = 'Mosh'; //String Literal
console.log(firstName);
//Variable:
//Cannot be a reserved keyword
//Should be meaningful
//Cannot start with a number
//Cannot contain a space or hyphen(-)
//Are case-sensitive
let secondName = 'Roy';
let lastName = 'Jane';

//Constant:
const interestRate = 0.3;
console.log(interestRate);
//Constant type cannot be changed

//Primitive(Value) Types: String Number Boolean undefined null
//Reference Types
let age = 30; //Number Literal
let isApproved = true; //Boolean Literal
let myName; //undefined
let userImage = null;

//Dynamic language & Static language
//JavaScript is dynamic language

//Array
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
console.log(selectedColors.length);

//Functions: Performing a task
function greet(call){
    console.log('Hello ' + call);
}

greet('Amy');
greet('Jan');

//Calculating a value
function square(number){
    return number * number;
}

console.log(square(2));
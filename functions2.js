function add(a,b) {
    const sum = a + b;
    return a+b;
}
function print(message){
    console.log(message);
}
function print(message = "hi", name = "User"){
    console.log(message+" "+name);
}
function c_area(PI, r){
    const  multiply = PI * (r*r);
    return PI * (r*r);
}
function calculate_parameter(width, length){
    return width *2 + length * 2;
}
// const calculate_parameter = function (width, lenth){
//     return width *2 + length * 2;
// };
let print1 = function(message = "wanangwa"){
    console.log(message)
}
function greet0(message){
    console.log(message);
}
const greet = function (message){
    console.log(message);
};
const greet2 = (message) => console.log(message)

const print2 = (message = "hi", name = "User") =>{

}
const PI = 3.124;
let r = 5;
console.log(c_area(PI,r));
let a = 90;
let b = 56;
const sum = add(a,b);
console.log(add(a,b));
const message = "hello world";
const name = "Martha"
print(message)
print(message)
print()
greet2("wanangwa")

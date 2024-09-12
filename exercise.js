function compare(a,b){
    if(a>b){
        return a
    }
    else{
        return b
    }
}
const comparee = function (a,b){
    if (a>b){
        return a
    }
    else{
        return b;
    }
}
function print(message){
    console.log(message);}
function conveter1(celcius, pr){
    const fareinheit = (celcius * 9) / + 32;
    pr(fareinheit)
}
function getDataFromAPI(URL){
    console.log(`fectching data from ${URL} `);
    return ["apples", "Oranges", "Guavas"]
}
function updateTable(URL, pr){
    const data = getDataFromAPI(URL);
    pr(data)
    // Update the UI
}
function f1(){
    console.log("hello world")
}
const conveter = celcius => (celcius * 9/5) +32
console.log(comparee(6,8));
let a = 11;
let b = 14;
console.log(compare(a,b));
console.log(conveter(120))
let c = 34;
const URL = "http:://poly-api.com/data"
//updateTable(URL, print)
//setTimeout(() =>{console.log("This message has been delayed by five seconds")}, 5000)
// f1();
// setInterval(f1, 2000)

const circleArea = (radius = 0, callback) => {
    let area = radius * radius * Math.PI;
    callback(area);
}

const printArea = (area) => {
    console.log(`The area is ${area}`);
};
circleArea(23, printArea);
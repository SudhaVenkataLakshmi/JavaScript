// var name = "Sushma";
// let age = 21;
// const country = "India";

// console.log(name);
// console.log(age);
// console.log(country);


// function greet(){
//     console.log("Hello");
// }
// greet();



// const greet = function(){
//     console.log("Hey");
// }
// greet();

// const greet = () => {
//     console.log("Arrow Function");

// }
// greet();


// var x = 10;
// function outer(){
//     var x = 20;
//     function inner(){
//         console.log(x);
//     }
//     inner();
// }
// outer();



// function outer(){
//     let x  =10;
//     return function inner(){
//         let x = 20;
//         console.log(x);
//     }
// }
// let fn = outer();
// fn();


// function greet(name){
//     console.log("Hello "+name);
// }
// function processUser(callback){
//     let name = "Sushma";
//     callback(name);
// }
// processUser(greet);


// function first(){
//     console.log("First");
// }
// function second(callback){
//     console.log("Second");
//     callback();
// }

// second(first);



// console.log("Start");
// setTimeout(function(){
//     console.log("Inside Timeout");
// },0);
// console.log("End");


// console.log("A");

// setTimeout(() => {
//     console.log("B");
// },1000);

// console,log("C");

// setTimeout(() => {
//     console.log("D");
// },0);



console.log("A");
setTimeout(() => {
    console.log("B");
}, 1000);

console.log("C");

setTimeout(() => {
    console.log("D");
}, 0);


// console.log("Start");
// setTimeout(() => {
//     console.log("A");
// },2000);
// setTimeout(() => {
//     console.log("B");
// },0);
// console.log("End");

// console.log("1");
// setTimeout(() => {
//     console.log("2");
// },0);
// setTimeout(() => {
//     console.log("3");
// },0);
// console.log("4");
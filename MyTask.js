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


function greet(name){
    console.log("Hello "+name);
}
function processUser(callback){
    let name = "Sushma";
    callback(name);
}
processUser(greet);
// let promise = new Promise(function(resolve, reject){
//     let success = true;
//     if(success){
//         resolve("Operation SuccessFul!");
//     }else{
//         reject("Operation Failure!");
//     }
// });

// promise
//     .then(function(result){
//         console.log(result);
//     })
//     .catch(function(error){
//         console.log(error);
//     });



// function fetchData() {
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){
//             resolve("Data Received");
//         },2000);
//     });
// }
// fetchData().then(function(data){
//     console.log(data);
// });



// console.log("A");
// Promise.resolve().then(function(){
//     console.log("B");
// });
// console.log("C");


// let myPromise = new Promise(function(resolve, reject){
//     resolve("Successful!!");
// });
// myPromise.then(function(result){
//     console.log(result);
// });



// let myPromise = new Promise(function(resolve, reject){
//     reject("Something went Wrong!!");
// });
// myPromise
// .then(function(result){
//     console.log(result);
// })
// .catch(function(error){
//     console.log(error);
// });


// console.log("Start");
// Promise.resolve().then(function(){
//     console.log("Promise");
// });
// console.log("End");



// console.log("Start");
// setTimeout(()=>{
//     console.log("TimeOut");
// },0);
// Promise.resolve().then(() =>{
//     console.log("Promise");
// });
// console.log("End");



console.log("Apple");
Promise.resolve().then(() =>{
    console.log("Banglore");
    Promise.resolve().then(()=>{
        console.log("California");
    });
});
setTimeout(()=>{
    console.log("Deserve");
},0);
console.log("Euphoria");
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


let myPromise = new Promise(function(resolve, reject){
    resolve("Success!");
});
myPromise.then(function(result){
    console.log(result);
});
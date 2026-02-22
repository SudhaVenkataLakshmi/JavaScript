// async function test() {
//     return "Hello";
// }
// test().then(result => console.log(result));


// function fetchData(){
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("Data Received");
//         },2000);
//     });
// }
// async function getData() {
//     let result = await fetchData();
//     console.log(result);
// }
// getData();


// console.log("Start");
// async function test() {
//     console.log("Inside");
//     await Promise.resolve();
//     console.log("After await");
// }
// test();
// console.log("End");


// fetchData()
// .then(result => {
//     console.log("result");
// })
// .catch(error => {
//     console.log(error);
// });



// function fetchData(){
//     return new Promise((resolve, reject) => {
//         let success = false;
//         if(success){
//             resolve("Data received");
//         }
//         else{
//             reject("Something went Wrong");
//         }
//     });
// }
// async function  getData() {
//     try{
//         let result = await fetchData();
//         console.log(result);
//     }catch(error){
//         console.log("Error: ",error);
//     }
// }
// getData();


async function test() {
    try{
        await Promise.reject("Error 1");
        console.log("After reject");
    }catch(err){
        console.log("Caught: ",err);
    }
    console.log("End of the function");
}
test();


// async function test() {
//     try{
//         console.log("Start");
//         await Promise.reject("Fail");
//         console.log("After Await");
//     }catch(error){
//         console.log("Caught: ",error);
//     }
//     console.log("End");
// }
// console.log("Outside");
// test();
// console.log("Done");
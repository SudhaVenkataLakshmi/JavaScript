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


fetchData()
.then(result => {
    console.log("result");
})
.catch(error => {
    console.log(error);
});
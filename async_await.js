// async function test() {
//     return "Hello";
// }
// test().then(result => console.log(result));


function fetchData(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Data Received");
        },2000);
    });
}
async function getData() {
    let result = await fetchData();
    console.log(result);
}
getData();
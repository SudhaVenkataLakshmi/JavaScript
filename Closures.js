function outer(){
    let count = 6;
    function inner(){
        count --;
        console.log(count);
    }
    return inner;
}
let counter = outer();
counter();
counter();
counter();
counter();
counter();
counter();
counter();



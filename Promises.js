let promise = new Promise(function(resolve, reject){
    let success = true;
    if(success){
        resolve("Operation SuccessFul!");
    }else{
        reject("Operation Failure!");
    }
});

promise
    .then(function(result){
        console.log(result);
    })
    .catch(function(error){
        console.log(error);
    });
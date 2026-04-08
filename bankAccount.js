function bankAccount(){
    let balance = 1000;
    return {
        deposit:  function(amount){
            balance += amount;
        console.log(balance);
       },
       withdraw: function(amount){
        balance -= amount;
        console.log(balance);
       }
    };
}
let account = bankAccount();
account.deposit(1000);
account.withdraw(800);
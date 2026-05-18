function bankAccount(){
    let balance = 3000;
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
account.deposit(2500);
account.withdraw(900);
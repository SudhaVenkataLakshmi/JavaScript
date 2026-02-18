function bankAccount(){
    let balance = 1000;
    return{
        deposit: function(amount){
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
account.deposit(500);
account.withdraw(200);


let arr=['Be the change you wish to see in the world' ,
    'The only way to do great work is to love what you do' ,
    'No one can make you feel iferior without your consent.',
    'We accept the love we think we deserve',
    'Imperfection is beauty, madness is genuise',
    "You miss 100% of the shots you don't take",
    'The greatest glory in living lies not in never falling, but in rising every time we fall',
    'The unexamined life is not worth living',
    'The journey of thousand miles begins with one step',
    'Not all those who wander the lost',
    'Be yourself; everone else is already taken',
    'The only constant way in life is CHANGE',
    'You only live once, but if you do it right, once is enough',
    'The mind is everthing. What you think, you become'];
function myfunc()
{
let pic = Math.floor(Math.random()*arr.length);
let quote= arr[pic];
let myp=document.getElementById("mypara");
    myp.style.color="deeppink";
    myp.style.fontSize=30;
    myp.textContent=quote;
    console.log(quote);
}




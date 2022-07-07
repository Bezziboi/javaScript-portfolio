{
let a;
let b;
let c;

document.getElementById("submitButton").onclick = function (){
    a = document.getElementById("aText").value;
    a = Number(a);

    b = document.getElementById("bText").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    document.getElementById("cLabel").innerHTML = `C = ${c}`;
}}




{
let count = 0;

document.getElementById("decreaseBtn").onclick = function(){
    count -= 1;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("resetBtn").onclick = function(){
    count = 0;
    document.getElementById("countLabel").innerHTML = count;
}
document.getElementById("increaseBtn").onclick = function(){
    count += 1;
    document.getElementById("countLabel").innerHTML = count;
}}





{
let x;
let z;
let y;

document.getElementById("rollBtn").onclick = function() {
    x = Math.floor(Math.random() * 20) + 1;
    document.getElementById("xLabel").innerHTML = x + "-";

    z = Math.floor(Math.random() * 20) + 1;
    document.getElementById("zLabel").innerHTML = z + "-";

    y = Math.floor(Math.random() * 20) + 1;
    document.getElementById("yLabel").innerHTML = y;
}}







{
document.getElementById("submitBtn").onclick = function() {
    
    const checkBox = document.getElementById("checkBox");
    const visaBtn = document.getElementById("visaBtn");
    const masterBtn = document.getElementById("masterBtn");
    const paypalBtn = document.getElementById("paypalBtn");
    const subscribeLabel = document.getElementById("subscribeLabel");
    const paymentLabel = document.getElementById("paymentLabel");

    if(checkBox.checked == true) {
        subscribeLabel.innerHTML = "You are subscribed!";
    }
    else {
        subscribeLabel.innerHTML = "You are Not subscribed!";
    }

    if(visaBtn.checked == true) {
        paymentLabel.innerHTML = "You are paying with a Visa!";
    }
    else if(masterBtn.checked == true) {
        paymentLabel.innerHTML = "You are paying with a MasterCard!";
    }
    else if(paypalBtn.checked == true) {
        paymentLabel.innerHTML = "You are paying with a PayPal!";
    }
    else {
        paymentLabel.innerHTML = "You must select a payment type!";
    }
}}








{
    let guessAnswer = document.getElementById("guessAnswer");
const answer = Math.floor(Math.random() * 10 + 1);
let guesses = 0;

document.getElementById("guessBtn").onclick =  function() {
    let guess = document.getElementById("guessInput").value;
    guesses ++;
    if(guess == answer) {
        guessAnswer.innerHTML =`${answer} is true. It took you ${guesses} guesses.`;
    }
    else if(guess < answer) {
        guessAnswer.innerHTML = `Too large ${guesses} guesses`;
    }
    else {
        guessAnswer.innerHTML = `Too small ${guesses} guesses`;
    }
}
}
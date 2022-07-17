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
    let rounded = c.toFixed(2)

    document.getElementById("cLabel").innerHTML = `C &#8776; ${rounded}`;
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
        guessAnswer.innerHTML = `Too large. ${guesses} guesses`;
    }
    else {
        guessAnswer.innerHTML = `Too small. ${guesses} guesses`;
    }
}
}










{
let tempBtn = document.getElementById("tempBtn");
let tempInput = document.getElementById("tempInput");
let celsiusBtn = document.getElementById("celsiusBtn");
let fahrenheitBtn = document.getElementById("fahrenheitBtn");
let tempLabel = document.getElementById("tempLabel");

tempBtn.onclick = function() {
    let temp;
    if(celsiusBtn.checked) {
        temp = tempInput.value;
        temp = Number(temp);
        temp = toCelsius(temp);
        tempLabel.innerHTML = temp + "°C";
    }
    else if(fahrenheitBtn.checked) {
        temp = tempInput.value;
        temp = Number(temp);
        temp = toFahrenheit(temp);
        tempLabel.innerHTML = temp + "°F";
    }
    else {
        tempLabel.innerHTML = "Select a unit"
    }
} 

function toCelsius(temp) {
    return (temp - 32) * (5/9);
}

function toFahrenheit(temp) {
    return temp * 9 / 5 + 32;
}
}





{
const myClockLabel = document.getElementById("myClockLabel");

update();
setInterval(update, 1000);

function update() {
    let date = new Date;
    myClockLabel.innerHTML = formatTime(date);

    function formatTime(date) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let amOrPm = hours >= 12 ? "pm" : "am";

        hours = (hours % 12) || 12;

        hours = formatZeroes(hours);
        minutes = formatZeroes(minutes);
        seconds = formatZeroes(seconds);

        return `${hours}:${minutes}:${seconds} ${amOrPm}`;
    }
    function formatZeroes(time) {
        time = time.toString();
        return time.length < 2 ? "0" + time : time; 
    }
}
}







{
const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startButton");
const pauseBtn = document.querySelector("#pauseButton");
const resetBtn = document.querySelector("#resetButton");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;
let milsecs = 0;

startBtn.addEventListener("click", () => {
    if(paused) {
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime, 10)
    }
});

pauseBtn.addEventListener("click", () => {
    if(!paused) {
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalId);
    }
});

resetBtn.addEventListener("click", () => {
    paused = true;
    clearInterval(intervalId);
    startTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    hrs = 0;
    mins = 0;
    secs = 0;
    milsecs = 0;
    timeDisplay.textContent = "00:00:00:00"
});

function updateTime() {
    elapsedTime = Date.now() - startTime;

    milsecs = Math.floor((elapsedTime / 1000) * 1000 % 1000);
    secs = Math.floor((elapsedTime / 1000) % 60);
    mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
    hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

    milsecs = pad(milsecs);
    secs = pad(secs);
    mins = pad(mins);
    hrs = pad(hrs);

    timeDisplay.textContent = `${hrs}:${mins}:${secs}:${milsecs}`;

    function pad(unit) {
        return (("0") + unit).length > 2 ? unit : "0" + unit;
    }
}
}





{
    const playerText = document.querySelector("#playerText");
    const computerText = document.querySelector("#computerText");
    const resultText = document.querySelector("#resultText");
    const choiceBtn = document.querySelectorAll(".choiceBtn");
    
    let player;
    let computer;
    
    choiceBtn.forEach(button => button.addEventListener("click", () => {
    
        player = button.textContent;
        computerTurn();
        playerText.textContent = `Player: ${player}`;
        computerText.textContent = `Computer: ${computer}`;
        resultText.textContent = checkWinner();
    }))
    
    function computerTurn() {
        const randNum = Math.floor(Math.random() * 3) + 1;
    
        switch(randNum) {
            case 1:
                computer = "✊";
                break;
            case 2:
                computer = "✋";
                break;
            case 3:
                computer = "✌️";
                break;
        }
    }
    function checkWinner() {
        if(player == computer) {
            return "Draw!"
        }
        else if(computer == "✊") {
            return (player == "✋") ? "You win!" : "You lose! 💩";
        }
        else if(computer == "✋") {
            return (player == "✌️") ? "You win!" : "You lose! 💩";
        }
        else if(computer == "✌️") {
            return (player == "✊") ? "You win!" : "You lose! 💩";
        }
    }
}
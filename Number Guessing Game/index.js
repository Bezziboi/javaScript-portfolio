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
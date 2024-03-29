// wait for the Dom to finish loading before running the game 
//get the button elements and add event listners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button")

    for (let button of buttons){
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }

    runGame("addition");

})

/**
 * The main game "loop", called when the script is first loaded 
 * and afther the users answer has been processed
 */
function runGame(gameType) {

    // Creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}

/**
 * cheks the answer agaist the first element in
 * the returend calculateCorrectAnswer array
 */
function checkAnswer() {

    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert("Hey! you got it right! :D");
        incremnetScore();
    } else {
        alert(`Awww.... you aswered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
        incremnetWrongAnswer();
    }

    runGame(calculatedAnswer[1]);
}


/**
 * Gets the operands (the numbers) and the oprator (plus, minus etc)
 * directly from the dom, and return the correct answer.
 */
function calculateCorrectAnswer() {
    
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else {
        alert(`unimplemented operator ${operator}`);
        throw `unimplemented operator ${operator}. Aborting!`;
    }

}
/**
 * Gets the current score from the DOM and increments it by 1
 */
function incremnetScore() {
    
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;

}
/**
 * Gets the current tally of incorrect answers from the DOM and increments it by 1
 */
function incremnetWrongAnswer() {

    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}
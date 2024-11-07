const readline = require('readline');

const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const difficultyLevels = {
    easy: 10,
    medium: 7,
    hard: 3
}


function startGame() {
    read.question("Enter difficulty level (easy, medium, hard): ", (level) => {
        // In Node.JS below chances variable will be 'undefined' .
        //In Node.js falsy values are-
        //false
        // 0 (the number zero)
        // "" (an empty string)
        // null
        // undefined
        // NaN (Not a Number)
        const chances = difficultyLevels[level.toLowerCase()];

        if (!chances) {
            console.log("Invalid Input.")
            //startGuessing()
            startGame()
        } else {
            console.log("We will start with - " + chances)
            startGuessing(chances)
        }

    })
}

function startGuessing(chances) {
    const targetNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

    function guess() {
        if (attempts >= chances) {
            console.log(`You've run out of chances! The number was ${targetNumber}.`);
            restartGame()
            return;
        }
        read.question("Enter your guess : ", (input) => {
            const guessNumber = parseInt(input, 10)
            attempts++
            if (guessNumber === targetNumber) {
                console.log(`Congratulations! You've guessed the number ${targetNumber} in ${attempts} attempts.`);
                read.close();
            } else if (guessNumber < targetNumber) {
                console.log("Too low!");
                guess();
            } else {
                console.log("Too high!");
                guess();
            }
        })
    }
    console.log(`You have ${chances} attempts to guess the correct number.`);
    guess();

}

function restartGame() {
    read.question('Do you want to Restart? : y / n :  ',(answer) => {
        if (answer === 'y') {
            startGame()
        }
        else if (answer === 'n'){
            read.close()
        }
        else{
            console.log("Invalid Input.")
            restartGame()
        }
    })
}
startGame();


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


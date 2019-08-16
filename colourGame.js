var colours = generateRandomColours(6);
var colourSquares = document.querySelectorAll(".square");
var pickedColour = pickColour();
var colourDisplay = document.getElementById("colourDisplay");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var newColourButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");
var gameMode = 'hard';

colourDisplay.textContent = pickedColour;

easyBtn.addEventListener("click", function () {
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    setGameDifficultyLevel('easy');
    gameMode = 'easy';
    message.textContent = "";
});


hardBtn.addEventListener("click", function () {
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    setGameDifficultyLevel('hard');
    gameMode = 'hard';
    message.textContent = "";
});



newColourButton.addEventListener("click", function () {
    if (gameMode === 'easy') {
        setGameDifficultyLevel('easy');
    }
    else if (gameMode === 'hard') {
        setGameDifficultyLevel('hard');
    }
    h1.style.backgroundColor = "steelblue";
    message.textContent = "";
    this.textContent = "new colours";

});

for (i = 0; i < colourSquares.length; i++) {
    // Add initial colours to squares
    colourSquares[i].style.backgroundColor = colours[i];

    // Add event listeners to squares
    colourSquares[i].addEventListener("click", function () {
        if (this.style.backgroundColor === pickedColour) {
            message.textContent = "Correct!";
            changeColours(pickedColour);
            h1.style.backgroundColor = pickedColour;
            newColourButton.textContent = "Play Again?";
        }
        else {
            this.style.backgroundColor = '#232323';
            message.textContent = "Try Again";
        }
    });
}
function changeColours(colour) {
    for (var i = 0; i < colourSquares.length; i++) {
        colourSquares[i].style.backgroundColor = colour;
    }
}

function pickColour() {
    var random = Math.floor(Math.random() * colours.length);
    return colours[random];
}

function generateRandomColours(numb) {
    var generatedColourArray = [];
    for (var i = 0; i < numb; i++) {
        generatedColourArray.push(randomColourGenerator());
    }
    return generatedColourArray;
}

function randomColourGenerator() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return 'rgb(' + red + ', ' + green + ', ' + blue + ')'
}

function setGameDifficultyLevel(mode) {
    if (mode === 'easy') {
        colours = generateRandomColours(3);
        // pick a new random colour from the three generated
        pickedColour = pickColour();
        // show the new picked colour in the heading
        colourDisplay.textContent = pickedColour;
        // loop through the squares and hide the bottom squares
        for (var i = 0; i < colourSquares.length; i++) {
            if (colours[i]) {
                colourSquares[i].style.backgroundColor = colours[i];
            }
            else {
                colourSquares[i].style.display = "none";
            }
        }
    }
    else if (mode === 'hard') {
        colours = generateRandomColours(6);
        // pick a new random colour from the three generated
        pickedColour = pickColour();
        // show the new picked colour in the heading
        colourDisplay.textContent = pickedColour;
        // loop through the squares and hide the bottom squares
        for (var i = 0; i < colourSquares.length; i++) {
            colourSquares[i].style.backgroundColor = colours[i];
            colourSquares[i].style.display = "block";

        }

    }

}
var colours = [
    "rgb(0, 255, 255)",
    "rgb(255, 0, 255)",
    "rgb(0, 192, 192)",
    "rgb(50, 128, 128)",
    "rgb(128, 0, 0)",
    "rgb(128, 128, 0)"
];

var colourSquares = document.querySelectorAll(".square");
var pickedColour = colours[3];
var colourDisplay = document.getElementById("colourDisplay");
var message = document.getElementById("message");
colourDisplay.textContent = pickedColour;



for (i = 0; i < colourSquares.length; i++) {
    // Add initial colours to squares
    colourSquares[i].style.backgroundColor = colours[i];

    // Add event listeners to squares
    colourSquares[i].addEventListener("click", function () {
        if(this.style.backgroundColor === pickedColour){
            alert("My colour matches");
        }
        else{
            this.style.backgroundColor = '#232323';
            message.textContent = "Try Again";
        }
    });
}

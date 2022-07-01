// wait for the DOM to finish loading before running the game
// get the button elements and add event listeners to them 
document.addEventListener("DOMContentLoaded", function() {
let buttons = this.getElementsByTagName("button");

for (let button of buttons) { 
    button.addEventListener("click", function() {
        if (this.getAttribute("data-type") === "reset"){
            alert("You clicked Reset!");
        } else { 
            let gameType = this.getAttribute("data-type");
            alert(`You Clicked ${gameType}`)

        }

})
}
})
function runGame() {

}

function currentCount() {

}
function trueCount() {

}

function displayDivisionOption() {

}

function displaySubtractOption() {

}
function displayAdditionOption() {

}

function resetButton() {

}

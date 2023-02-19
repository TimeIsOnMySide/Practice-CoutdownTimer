// Identify elements in the DOM
// Text for minutes and seconds to be updated
let minutesText = document.getElementById('minutes');
let secondsText = document.getElementById('seconds');

// Start and reset buttons
const startButton = document.querySelector('#startBtn');
const resetButton = document.querySelector('#resetBtn');

// Watch buttons for a click
startButton.addEventListener('click', displayCountdown);
resetButton.addEventListener('click', resetTimer);

// Set starting Values
let displayMinutes = 25;
let displaySeconds = 0;
let nIntervId;
let minutesStr = '';
let secondsStr = '';

// Function that will refresh the text displayed on the DOM
function updateText() {
    minutesText.textContent = (displayMinutes >= 10 ? displayMinutes.toString() : '0' + displayMinutes.toString());
    secondsText.textContent = (displaySeconds >= 10 ? displaySeconds.toString() : '0' + displaySeconds.toString()); 
}

// Count down the minutes and seconds
function refreshDisplay() {
    if(displaySeconds === 0 && displayMinutes === 0) {
        alert('Times Up!');
        clearInterval(nIntervId);
    } else if (displayMinutes >= 0 && displaySeconds > 0) {
        displaySeconds--;
        updateText();
    } else if (displayMinutes > 0 && displaySeconds === 0) {
        displaySeconds = 59;
        displayMinutes--;
        updateText();
    }
}

// Function that starts the countdown
function displayCountdown() {
    //set interval to run every second while theres still time on the clock
    nIntervId = setInterval(refreshDisplay, 1000);
}

// Function that resets the timer
function resetTimer() {
    clearInterval(nIntervId);
    displayMinutes = 25;
    displaySeconds = 0;
    updateText();
}

//Set starting text
updateText();




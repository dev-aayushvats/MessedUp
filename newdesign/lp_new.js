const textToReveal = "MEAL TIME!!";
const revealingText = document.getElementById("revealingText");
let currentIndex = 0;

function revealLetter() {
    if (currentIndex < textToReveal.length) {
    revealingText.textContent = textToReveal.substring(0, currentIndex + 1);
    currentIndex++;
    }
}

const revealInterval = setInterval(revealLetter, 300);
if (currentIndex === textToReveal.length) {
    clearInterval(revealInterval);
}
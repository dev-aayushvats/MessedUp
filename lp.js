const textToReveal = "Meal Time!!";
const revealingText = document.getElementById("revealingText");
let currentIndex = 0;

function revealLetter() {
    if (currentIndex < textToReveal.length) {
    revealingText.textContent = textToReveal.substring(0, currentIndex + 1);
    currentIndex++;
    }
}

const revealInterval = setInterval(revealLetter, 500);
if (currentIndex === textToReveal.length) {
    clearInterval(revealInterval);
}
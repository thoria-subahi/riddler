const riddleElement = document.getElementById('riddle');
const answerElement = document.getElementById('answer');
const newRiddleButton = document.getElementById('new-riddle');
const showAnswerButton = document.getElementById('show-answer');

let currentRiddle = {};

// Function to fetch a new riddle from the Riddles API
async function fetchRiddle() {
    try {
        const response = await fetch('https://riddles-api.vercel.app/random');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching riddle:', error);
        return { riddle: 'Failed to fetch a new riddle.', answer: '' };
    }
}

// Function to display a new riddle
async function displayRiddle() {
    currentRiddle = await fetchRiddle();
    riddleElement.textContent = currentRiddle.riddle;
    answerElement.textContent = currentRiddle.answer;
    answerElement.style.display = 'none';
    showAnswerButton.style.display = 'inline-block';
}

// Function to show the answer
function showAnswer() {
    answerElement.style.display = 'block';
    showAnswerButton.style.display = 'none';
}

// Event listeners for buttons
newRiddleButton.addEventListener('click', displayRiddle);
showAnswerButton.addEventListener('click', showAnswer);

// Initialize with a riddle
displayRiddle();
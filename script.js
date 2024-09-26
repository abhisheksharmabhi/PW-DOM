// Get the counter element
const counterElement = document.getElementById('counter');

// Get the button elements
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const resetBtn = document.getElementById('reset-btn');

// Initialize the counter value
let counterValue = 0;

// Update the counter value on the page
function updateCounter() {
    counterElement.textContent = counterValue;
}

// Increment the counter value
incrementBtn.addEventListener('click', () => {
    counterValue++;
    updateCounter();
});

// Decrement the counter value
decrementBtn.addEventListener('click', () => {
    counterValue--;
    updateCounter();
});

// Reset the counter value
resetBtn.addEventListener('click', () => {
    counterValue = 0;
    updateCounter();
});
// Game Constants
const MAX_NUMBER = 49;
const DRAW_COUNT = 6;

// Function to generate lottery draw
function generateDraw() {
    let draw = [];
    while (draw.length < DRAW_COUNT) {
        let num = Math.floor(Math.random() * MAX_NUMBER) + 1;
        if (!draw.includes(num)) {
            draw.push(num);
        }
    }
    return draw.sort((a, b) => a - b);
}

// Function to calculate matches
function calculateMatches(userNumbers, draw) {
    return userNumbers.filter(num => draw.includes(num)).length;
} 

// Example usage
const userNumbers = [5, 12, 23, 34, 45, 49];
const lotteryDraw = generateDraw();
console.log('Lottery Draw:', lotteryDraw);
console.log('Matches:', calculateMatches(userNumbers, lotteryDraw));
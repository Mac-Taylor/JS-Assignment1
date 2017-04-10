
// Problem #1 | The Tallest Mountain 

let height = [100, 250, 14, 516, 375];
let tallest = height[0];

for (let current = 0; current < height.length; current = current +1) {
    
    if (height[current] > tallest) {
        tallest = height[current];
    }
        else {tallest === height[current];
    }
}

console.log(tallest)

// ================================================================================================

// Problem #2 | Hangman Lite

let word1 = 'orangutan';
let letter = 'g';
let hasletter = false;
let numberOfLetters = 0;

for (let loop = 0; loop < word1.length; loop = loop +1) {

    if (word1[loop] === letter) {
        hasletter = true;
        ++numberOfLetters;
    }
}

if (hasletter === true) {
    console.log('Yes, the letter "' + letter + '" appears ' + numberOfLetters + ' times in the word.');
}

else {
    hasletter === false;
    console.log('No, the letter "' + letter + '" does not appear in the word.');
}

// ================================================================================================

// Problem #3 | Cherokee Hare

let startingPopulation = 200;

let birthRate = 1.1;

let numberOfWeeks = 5;

let currentPopulation = Math.floor(startingPopulation * (birthRate **= numberOfWeeks))

console.log ('There will be ' + currentPopulation + ' Cherokee Hares after ' + numberOfWeeks + ' weeks.')


// ================================================================================================

// Problem #4 | Change Machine 

let amount = 518;

let bills = [20, 10, 5, 1];

let answer = [0, 0, 0, 0];

for (let count = 0; count < bills.length; count = count + 1) {
    answer[count] = Math.floor(amount/bills[count]);
    amount = amount - (answer[count] * bills[count]);
}

console.log(answer)

// ================================================================================================

// Problem #5 | Finding Palindromes

let word2 = 'racecar';
let end = word2.length - 1;
let IsPalindrome = true;

for (let start = 0; start < word2.length; start = start + 1) {
    if (word2[start] !== word2[end]) {
        IsPalindrome = false;
    }
end = end - 1; 
}

if (IsPalindrome === true) {
    console.log ('Yes, "' + word2 + '" is a palindrome.')
}

else {
    console.log('No, the word "' + word2 + '" is not a palindrome.')
}

// ================================================================================================

// Optional: Hard Mode Problem | Fibonacci Sequence




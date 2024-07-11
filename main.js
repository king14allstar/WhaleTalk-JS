// Create a variable that contains the text you want to translate into whale talk.
let input = 'Rain Rain Go Away'

//Create an array of vowels to be extracted from the input variable
const vowels = ["a", "e", "i", "o", "u"];

//Create a variable called results array that will store the vowels from the input string
let resultArray = [];

//Create a loop that iterates through each letter in input
for (let i = 0; i< input.length; i++) {

//As you loop through the input, iterate through the vowels array
for (let j = 0; j < vowels.length; j++) {

//If the input and vowels match, push to resultsArray
if (input[i] === vowels[j]) {
  resultArray.push(input[i]);
}
}

//If the input is 'e' after checking for matches, add another instance of 'e' so you will get 'e' 'e'.
if (input[i] === 'e') {
  resultArray.push(input[i]);
}

//If the input is 'u after checking for matches, add another instance of 'u' so you will get 'u' 'u'.
if (input[i] === 'u') {
  resultArray.push(input[i])
}
}

console.log(resultArray.join('').toUpperCase());
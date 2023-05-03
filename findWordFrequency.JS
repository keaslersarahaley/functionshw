function findWordFrequency(text, word) {
    // Convert both the text and word to lowercase to ignore case
    text = text.toLowerCase();
    word = word.toLowerCase();
    
    // Split the text into an array of words
    const words = text.split(' ');
    
    // Initialize a variable to count the frequency
    let count = 0;
    
    // Loop through each word in the array and check if it matches the given word
    for (let i = 0; i < words.length; i++) {
      if (words[i] === word) {
        count++;
      }
    }
    
    // Return the frequency count
    return count;
  }
  
  const text = "what does the fox say fox say fox say fox say fox fox fox fox fox ";
const word = "fox";

const frequency = findWordFrequency(text, word);
console.log(`The word "${word}" appears ${frequency} times in the text`);
// Output: The word "the" appears 2 times in the text

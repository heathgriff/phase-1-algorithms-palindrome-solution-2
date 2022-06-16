function isPalindrome(word) {
  // Write your algorithm here
  //iterate from beginning of string to middle
  for (let i = 0; i < word.length / 2; i++) {
  //compare iterated letter to corresponding letter at end of string
    const j = word.length - 1 - i;
    if (word[i] !== word[j]) {
      return false;
    }

  //if they don't match, return false
  }

  return true;
  //if they do match once at the middle, return true
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

function palindrome(str) {
      // Remove all non-alphabet characters and convert to lowercase
let cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    // Reverse the cleaned string
    let reversedStr = cleanedStr.split('').reverse().join('');

    // Check if the cleaned string is the same as the reversed string
    if (cleanedStr === reversedStr) {
        return true;
    } else {
        return false;
    }
  
}

console.log (palindrome("car"));
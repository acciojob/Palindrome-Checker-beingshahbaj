function isPalindrome(str) {
  
  const formattedStr = str.toLowerCase().replace(/[\W_]/g, '');

 
  return formattedStr === formattedStr.split('').reverse().join('');
}


const testString = "RaceCar";
const isPal = isPalindrome(testString);
console.log(isPal); 

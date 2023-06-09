// Number 1.

function max(x, y){
if (x > y) return x;
else return y;
}

console.log(max(1,2));

// Number 2.
var max = -Infinity;
function maxOfThree(x, y, z){

a = [x, y, z];
for (let i = 0; i < a.length; i++){
    if (a[i] > max)
    max = a[i];
}

return max;
}

console.log(maxOfThree(1,2,3));

// Number 3.

function isVowel(v){
    if (v.length > 1 ) return false;
    if (v === "a" || v === "e" || v === "i" || v === "o" || v === "u") return true;
    else return false;

}

console.log(isVowel("a"));
console.log(isVowel("aa"));
console.log(isVowel(2));

// Number 4.


function sum(...args){
    let res = 0;
    for(let i = 0; i< args.length; i++){
        res += args[i];
    }
    return res;

}
console.log(sum(1,2,3,4));

function multiply(...args){
    let res = 1;
    for(let i = 0; i< args.length; i++){
        res *= args[i];
    }
    return res;
}
console.log(multiply(1,2,3,4));

// Number 5
function reverse(a){
let s = "";
for (let i = a.length-1; i >= 0; i--){
    s += a[i];
}
return s
}

console.log(reverse("jag testar"));

// Number 6
function findLongestWord(...words){

    let maxWord = "";
    
    for (let i = 0; i < words.length; i++){
        if(words[i].length > maxWord.length){
            maxWord = words[i];
        }
    }
    return maxWord;
}

console.log(findLongestWord("cat", "giraffe", "fish", "elephant"));

// Number 7
function filterLongWords(i, ...words) {
    let longWords = [];
    for (let j = 0; j < words.length; j++) {
      if (words[j].length > i) {
        longWords.push(words[j]);
      }
    }
    return longWords;
  }
  
  console.log(filterLongWords(5, 'cat', 'elephant', 'giraffe', 'fish'));

  // Number 8
  function computeSumOfSquares(...numbers){

        return numbers.map(x => x * x) // squaring each value
                  .reduce((sum, current) => sum + current, 0); // adding up squares
      }
    console.log(computeSumOfSquares(1,2,3))

// Number 9
function printOddNumbersOnly(arr) {

    arr.filter(num => num % 2 !== 0) // filter out even numbers
       .forEach(oddNum => console.log(oddNum)); // print each odd number
  }

  // Number 10

  function computeSumOfSquaresOfEvensOnly(arr) {
    
    let evenNumbers = arr.filter(num => num % 2 === 0); // filter out the even numbers
    
    let squaredEvens = evenNumbers.map(num => num ** 2); // square each even number
  
    let sumOfSquares = squaredEvens.reduce((sum, currentValue) => sum + currentValue, 0); // compute the sum of the squares
  
    return sumOfSquares;
  }

  // Number 11

function sum(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // sum using Array.reduce()
  }

  function multiply(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator * currentValue, 1); // multiply using Array.reduce(). Initial value is however 1.
  }
  // Number 12
  function printFibo(n, a, b) {
    // Print the first two numbers
    let fibo = [a, b];
    let fiboString = a + ", " + b;
  
    // Compute and print the rest of the sequence
    for (let i = 2; i < n; i++) {
      let next = fibo[i-1] + fibo[i-2];
      fibo.push(next);
      fiboString += ", " + next;
    }
    
    console.log(fiboString);
  }
   
  
  
  
  
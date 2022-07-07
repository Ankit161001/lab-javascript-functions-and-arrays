// Progression #1: Greatest of the two numbers
var a = 4
var b = 3
function greatestOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  }
  else {
    return b;
  }
}

// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findScaryWord(words) {
  var lens = []
  if (words.length === 0) {
    return null;
  }
  if (words.length === 1) {
    return words[0];
  }
  for (let index = 0; index < words.length; index++) {
    const size = words[index].length;
    lens.push(size);
  }
  largest = 0
  large_index = 0
  for (let index = 0; index < lens.length; index++) {
    if (lens[index] > largest) {
      largest = lens[index];
      large_index = index;
    }
  }
  return words[large_index];
}

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function netPrice(numbers) {
  var price = 0
  for (let index = 0; index < numbers.length; index++) {  
    price = price + numbers[index];
  }
  return price;
}

// Progression #3.1: Bonus
function add(mixedArr) {
  total_chars = 0
  if (mixedArr.length === 0) {
    return 0;
  }
  for (let index = 0; index < mixedArr.length; index++) {
    if (typeof mixedArr[index] === 'string') {
      total_chars = total_chars + mixedArr[index].length;
    }
    if (typeof mixedArr[index] === 'number') {
      total_chars = total_chars + mixedArr[index];
    }
    if (typeof mixedArr[index] === 'boolean') {
      if (mixedArr[index] === true) {
        total_chars = total_chars + 1;
      }
      if (mixedArr[index] === false) {
        total_chars = total_chars + 0;
      }
    }
    if (typeof mixedArr[index] === 'object') {
      throw new Error ("Unsupported data type sir or ma'am")
    }
  }
  return total_chars
}

// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function midPointOfLevels(numbersAvg) {
  var total = 0
  if (numbersAvg.length === 0) {
    return null;
  }
  for (let index = 0; index < numbersAvg.length; index++) {  
    total = total + numbersAvg[index];
  }
  var avg = 0
  avg = total/numbersAvg.length;
  return avg;
}

// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(wordsArr) {
  word_lens = 0
  if (wordsArr.length === 0) {
    return null;
  }
  for (let index = 0; index < wordsArr.length; index++) {
    word_lens = word_lens + wordsArr[index].length;
  }
  return word_lens/wordsArr.length;
}

// Progression 4.3: Generic Average
const mixedArr = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156];

function avg(mixedArr) {
  total_chars = 0
  if (mixedArr.length === 0) {
    return null;
  }
  for (let index = 0; index < mixedArr.length; index++) {
    if (typeof mixedArr[index] === 'string') {
      total_chars = total_chars + mixedArr[index].length;
    }
    if (typeof mixedArr[index] === 'number') {
      total_chars = total_chars + mixedArr[index];
    }
    if (typeof mixedArr[index] === 'boolean') {
      if (mixedArr[index] === true) {
        total_chars = total_chars + 1;
      }
      if (mixedArr[index] === false) {
        total_chars = total_chars + 0;
      }
    }
  }
  ave = total_chars/mixedArr.length;
  return parseFloat(ave.toFixed(2))
}

// should return: 46.3

// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];

function uniqueArray(wordsUnique) {
  var dups = []

  var uni = [0]

  var bool = 0

  if (wordsUnique.length === 0) {
    return null;
  }

  for (var i = 0; i < wordsUnique.length; i++) {
    for (var j = 0; j < uni.length; j++) {
      if (wordsUnique[i] != uni[j]) {
        bool = 1;
      }
      else if (wordsUnique[i] === uni[j]) {
        bool = 0;
        dups.push(wordsUnique[i]);
        break
      }
    }
    if (bool === 1) {
      uni.push(wordsUnique[i])
    }
  }
  uni.shift()
  return uni;
}

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function searchElement(wordsFind, tofind) {
  if (wordsFind.length === 0) {
    return null;
  }

  var bool1 = 0
  for (var i = 0; i < wordsFind.length; i++) {
    if (tofind === wordsFind[i]) {
      bool1 = 1
    }
  }
  if (bool1 === 1) {
    return true;
  }
  else if (bool1 === 0) {
    return false;
  }
}

// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimesElementRepeated(wordsCount, toCount) {
  if (wordsCount.length === 0) {
    return 0;
  }

  var count = 0
  for (var i = 0; i < wordsCount.length; i++) {
    if (toCount === wordsCount[i]) {
      count = count + 1
    }
  }
  return count;
}

// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];

function maximumProduct(matrix) {
  one = 1
  for(var i = 0; i < matrix.length; i++){
      for(var j = 0; j < matrix.length; j++){
          if (matrix[i][j] != 1) {
              one = 0
          }
      } 
  }
  if (one == 1) {
    return 1;
  }
}

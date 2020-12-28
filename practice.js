//capitalize a string
function capitalize(str) {
    let result = str[0].toUpperCase();

    for(let i = 1; i < str.length; i++) {
        if(str[i - 1] === ' ') {
            result += str[i].toUpperCase()
        } else {
            result += str[i]
        }
    }

    return result;
}

//check if anagram
function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB)
}

function cleanString(str){
    //sort only works with arrays, so we need to use split, then we sort and join again to a string for comparison
    return str.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('')
}

// function anagrams(stringA, stringB) {
//     const charMapA = buildCharMap(stringA)
//     const charMapB = buildCharMap(stringB)

//     //check if there's even the same number of characters
//     if (Object.keys(charMapA).length !== Object.keys(charMapB).length){
//         return false;
//     }

//     //check if all keys for chars match
//     for (char in charMapA) {
//         if (charMapA[char] !== charMapB[char]){
//             return false
//         } 

//         return true
//     }

// }

// //helper function
// function buildCharMap(str){
//     const charMap = {};

//     for (let char of str.replace(/[^\w]/g).toLowerCase()) {
//         charMap[char] = charMap[char] + 1 || 1;
//     }

//     return charMap;
// }

//fizzbuzz
function fizzBuzz(n) {
    //need to iterate through the numbers.. > a for loop
    for ( let i = 1; i <= n; i++) {
        //is the number % of 3 and 5?
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz');
        } else if (i % 3 === 0) {
            console.log('fizz');
        } else if (i % 5 === 0) {
            console.log('buzz')
        } else {
            console.log(i);
        }
    }
}
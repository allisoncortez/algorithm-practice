//maxchar
function maxChar(str) {
    const charMap = {};
    let max = 0;
    let maxChar = '';

    //iterating through an array or string...
    for(let char of str) {
        if(charMap[char]){
            charMap[char]++;
        }
        else {
            charMap[char] = 1;
        }
    }

    //how do you iterate through an object?.. for in!
    // char in the for loop represent the key (NOT the value)
    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char]
            maxChar = char
        }
    }
    return maxChar
}
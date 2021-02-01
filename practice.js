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

//palindrome problem
//USING ARRAY.EVERY
// function palindrome(str) {

//     return str.split('').every((char, i) => {
//         //we're minusing 1 because our index starts at 0
//         return char === str[str.length - i - 1];
//     });
// }

//MAIN SOLUTION
function palindrome(str) {
    const newstr = str.split('').reverse().join('')

    if (str === newstr ) {
        return true
    }

        // more straightforward way of the if statement
        // return str === newstr;
}

//working with chunks
function chunk(array, size) {
    //slice method... leters.slice(0,3) 3 is the element where we will stop, 0 is where we start the slice
    const emptyArr = [];
    let index = 0;

    while (index < array.length) {
        emptyArr.push(array.slice(index, index + size));
        index += size;
    }

    return emptyArr;
}

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

//pyramids, recursive solution
function pyramid(n, row = 0, level = '') {
    //base case
    if (row === n) {
        return;
    }

    if (level.length === 2 * n - 1) {
        console.log(level);
        return pyramid(n, row + 1);
    }

    const midpoint = Math.floor(2 * n - 1 / 2);
    let add;
    //we determine which column we're operating on by looking at the length of our level string
    // && makes sure we're still to the left of this bound
    if (midpoint - row <= level.length && midpoint + row >= level.length) {
        add = '#';
    } else {
        add = ' ';
    }
    //after determining what character add will be, we'll insert this add this new variable into our recursive solution
    pyramid(n,row,level + add);

}

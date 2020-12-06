REVERSING STRINGS
1. How do you reverse a string?
newString.split('').reverse().join('')

- why does it need to be split?
You can't use methods(reverse) on arrays, so you turn it into a string, then join it back together.

2. How do you reverse a number?
const newNum = n.toString().split('').reverse().join('');
parseInt(newNum) * Math.sign(n)
2. How do you return a number? 
parseInt(n)

3. MAX CHAR
A group of very similar questions:
- What is the most common character in the string?
- Does the string A have the same characters as string B(is it an anagram)?
- Does the given string have any repeated characters in it?
(counting or verifying the number of characters in a string)
Conclusion:
These all can use maxChar...

A. take string and convert it to an object
- do this with a for of loop. This counts all the letters and how many there are.

B. iterate through this new object(charMap), and compare it to the max to see what has the highest number.

4. FIZZBUZZ
- how to calculate a given number in javascript..

Modulo operator:(to find multiples of a number)
- 9 %(modulo operator) 3 = 0
- is 11 % 3 === 0

first step: iterate through numbers > a for loop (since its not in an array or a string)
second: check for 3 and 5 

KEEP IN MIND:
* i starts at 1 (since our index actually starts at 0)
* === to make sure its exact
* dont make things complicated and hard to read..

5. RegEx
const word = "HI THERE!!"
- word.replace(/[^\w]/g, "").toLowercase();
1. make a character map out of both strings you're given











Methods to remember:
Math.sign(x) > returns 1 if positive and -1 if negative

parseInt(myNumber.toString()) / 2000 > takes a string and returns a number

array.toString()
array.split('').join
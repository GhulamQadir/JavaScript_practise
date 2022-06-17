// Chap FUNCTIONS
// Q:1. Write a function that displays current date & time in your browser.
function time() {
    var currentDate = new Date();
    document.write(currentDate)
}
time();


// Q:2. Write a function that takes first & last name and then it greets the user using his full name.
// function greet() {
//     var firstName = prompt("Enter your first name")
//     var lastName = prompt("Enter your last name")
//     alert(`Hi ${firstName} ${lastName}`)
// }
// greet();



// Q:3. Write a function that adds two numbers (input by user) and returns the sum of two numbers.
// function add() {
//     var num1 = Number(prompt("Enter number one"))
//     var num2 = Number(prompt("Enter number two"))
//     var addition = num1 + num2;
//     return addition;
// }
// console.log(add())



// Q:4. Calculator:
// Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.
// function calc(num1, operator, num2) {
//     if (operator == "+") {
//         return num1 + num2
//     }
//     else if (operator == "-") {
//         return num1 - num2
//     }
//     else if (operator == "*") {
//         return num1 * num2
//     }
//     else if (operator == "/") {
//         return num1 / num2
//     }
//     else if (operator == "%") {
//         return num1 / num2 * 100
//     }
//     else {
//         return "Incorrect Operator!"
//     }
// }

// var num1 = Number(prompt("Enter number one"))
// var operator = prompt("Enter operator")
// var num2 = Number(prompt("Enter number two"))

// document.write(`<br><br>Result: ${calc(num1, operator, num2)}`)



// Q:5. Write a function that squares its argument.
// function square(num) {
//     return num * num;
// }
// console.log(square(10))



// Q:6. Write a function that computes factorial of a number.
// function factor(num) {
//     var factorial = 1;

//     for (var i = num; i >= 1; i--) {
//         factorial *= i;
//     }
//     return factorial
// }
// console.log(factor(5))



// Q:7. Write a function that take start and end number as inputs & display counting in your browser.
// function counting() {
//     var startNum = Number(prompt("Enter start number of counting"))
//     var endNum = Number(prompt("Enter end number of counting"))
//     for (var i = startNum; i <= endNum; i++) {
//         document.write(`<br>${i}`)
//     }
// }
// counting();



// Q:8. Write a nested function that computes hypotenuse of a right angle triangle. Hypotenuse2 = B
// function hypotenuse() {
//     var base = Number(prompt("Enter base"))
//     var perpend = Number(prompt("Enter perpendicular"))
//     function square() {
//         base = base * base
//         perpend = perpend * perpend

//     }
//     square();
//     var hypot = base + perpend;
//     var takingSqrt = Math.sqrt(hypot).toFixed(2)
//     return takingSqrt;
// }
// document.write(`<br><br>Hypotenuse of a given values is: ${hypotenuse()}`)



// Q:9. Write a function that calculates the area of a rectangle. A = width * height
// function area(height, width) {
//     return height * width
// }
// console.log(`Area of a triangle is ${area(6, 4)}`)



// Q:10 Write a JavaScript function that checks whether a passed string is palindrome or not?
// function palindrome(word) {
//     var convert = word.split("").reverse().join("");
//     if (word === convert) {
//         alert("This is a palindrome word")
//     }
//     else {
//         alert("This is not a palindrome word")
//     }
// }
// palindrome("deed")



// Q:11. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// function capitalize(string) {
//     let words = string.split(" ")
//     for (var i = 0; i < words.length; i++) {
//         words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//     }

//     return words.join(" ");
// }
// console.log(capitalize("the quick brown fox"))



// Q:12. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
function longestWord(string) {
    var splitString = string.split(" ")
    var longest = "";
    for (var i = 0; i < splitString.length; i++) {
        if (splitString[i] > longest) {
            longest = splitString[i]
        }
    }
    return longest
    // for(var i = 0;i<)
}
console.log(longestWord("development sdsgdsdfsdsdfsgdfsgdfsgdf jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj"))
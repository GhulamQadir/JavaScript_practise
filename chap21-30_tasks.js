//  Changing case
// Q:1. Write a program that takes user input. Convert and show the input in capital letters.
// var input = window.prompt("Enter any text")
// var upper = input.toUpperCase();
// console.log(upper)



// Q:2. Write a program that takes user input. Convert and show the input in title case.
// var input = window.prompt("Enter any text")
// var firstChar = input.slice(0, 1)
// firstChar = firstChar.toUpperCase();
// var otherChars = input.slice(1)
// otherChars = otherChars.toLowerCase();
// console.log(firstChar + otherChars)




// Strings: measuring length and extracting parts
// Q:1. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser.
// var favPhone = window.prompt("Write the name of your favorite mobile phone model")
// var length = favPhone.length;
// console.log(length)


// Q:2. Write a program to display the last character of a user input
// var input = window.prompt("Enter any text")
// var lastChar = input.charAt(input.length - 1)
// console.log(lastChar)




// Strings: finding segments
// Q:1. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser.
// var country = "Pakistan";
// console.log(country.indexOf('n'))


// Q:2. Write a program to take user input and store username in a variable. If the username contains any special symbol among (@ . ,!), prompt the user to enter a valid username.
// var userName = window.prompt("Enter user name")
// for (var i = 0; i < userName.length; i++) {
//     if (userName[i] === "@" || userName[i] === "!" || userName[i] === "!") {
//         alert("There should be no special characters")
//         break;
//     }
// }



// Q:3. You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.
// var text = "The quick brown fox jumps over the lazy dog";
// var occu = text.split('the').length - 1; // -1 is the number of occurences
// console.log(occu)




// Strings: finding a character at a location
// Q:1. Write a program to find the character at 3 rd index in the word “Pakistani” and display the result in your browser.
// var country = "Pakistan";
// var thirdIndex = country.charAt(3)
// console.log(thirdIndex)




// Strings: replacing characters
// Q:1. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.
// var cityName = "Hyderabad"
// console.log(cityName)
// var replaceName = cityName.replace("Hyder", "Islam")
// console.log(replaceName)


// Q: 2. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replaceWord = message.replace(/and/g, "&")
// console.log(replaceWord)




//  Rounding Numbers
// Q:1. Write a program that takes a positive integer from user & display the following in your browser.
// a. number (example number: 3.45214)
// var num = window.prompt("Enter any positive floating point number");

// // b. round off value of the number
// var round = Math.round(num)
// console.log(round)

// // c. floor value of the number
// var floor = Math.floor(num)
// console.log(floor)

// // d. ceil value of the number
// var ceil = Math.ceil(num)
// console.log(ceil)



// 2. Write a program that takes a negative floating point number from user & display the following in your browser.
// // a. Number (example number: -2.678 )
// var num = window.prompt("Enter any negative floating point number");

// // b. round off value of the number
// var round = Math.round(num)
// console.log(round)

// // c. floor value of the number
// var floor = Math.floor(num)
// console.log(floor)

// // d. ceil value of the number
// var ceil = Math.ceil(num)
// console.log(ceil)




// Generating random numbers
// Q:1. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser
// var diceVal = Math.random() * 7
// console.log(diceVal)



// Q:2. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser.
// 2 = Heads and 1 = Tails
// var headsUser = window.prompt("Enter heads user username")
// var tailsUser = window.prompt("Enter heads tails username")
// var random = Math.random() * 2
// var ceil = Math.ceil(random)
// console.log(ceil)
// if (ceil === 2) {
//     alert(`Heads: ${headsUser} wins `)
// }
// else if (ceil === 1) {
//     alert(`Tails: ${tailsUser} wins `)
// }



// Q:3. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user.
// var inputNum = Number(window.prompt("Enter a number between"))
// var num = Math.random() * 10
// var round = Math.ceil(num)
// console.log(round)
// if (inputNum === round) {
//     alert("Your number is equal to secret number")
// }




// Converting strings to integers and decimals
// Q:1. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser.
// var usersWeight = parseInt(window.prompt("What is your weight"))
// console.log(usersWeight)




// Converting strings to numbers, numbers to strings
// Q:1. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.
// var input = window.prompt("Enter any number")
// var type = typeof input;
// console.log(input)
// console.log(type)


// Q:2. Write a program that converts the variable num to string.var num = 35.36; Remove the dot to display “3536” display in your browser.
var num = 35.36
var convert = num.toString().replace(".", "")
console.log(convert)




// Controlling the length of decimals
// Q:1. Write a program to control the length of decimals to 2. var percentage = 30 / 45 * 100; -> 66.66666666666666
var percentage = 30 / 45 * 100;
var fixedVal = percentage.toFixed(2)
console.log(fixedVal)
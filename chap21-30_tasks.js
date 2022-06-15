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
var message = "Ali and Sami are best friends. They play cricket and football together.";
var replaceWord = message.replace(/and/g, "&")
console.log(replaceWord)
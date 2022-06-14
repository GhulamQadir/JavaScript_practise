// for loop
// var tableNum = window.prompt("Enter table number");
// var tableInt = parseInt(tableNum);
// for (var i = 1; i <= 10; i++) {
//     console.log(`${tableInt} x ${i} = ${tableInt * i}`)
// }


// to find the factorial of any number
// var num = window.prompt("Enter factorial number");
// var convertNum = parseInt(num)
// var factorial = 1;
// for (var i = num; i >= 1; i--) {
//     factorial *= i;
// }
// console.log(factorial);


// for loops boolean
// var provinces = ["sindh", "punjab", "balochistan", "khyber pakhtun khuwa"];
// var checkProvince = window.prompt("Enter your province name");
// var changeCase = checkProvince.toLowerCase();
// var boolVal = false;

// for (var i = 0; i < provinces.length; i++) {

//     if (changeCase === provinces[i]) {
//         boolVal = true;
//         console.log("This is the province of Pakistan")
//         break;
//     }
// }
// if (boolVal === false) {
//     console.log("This is not the province of Pakistan")
// }


// nested loop(printing pyramid)
// var n = 10;
// var star = "";
// for (var i = 1; i <= n; i++) { // mentioning column
//     for (var j = 0; j < i; j++) { // mentioning row
//         star += "*";
//     }
//     star += "\n";
// }
// console.log(star);


// Assignment ARRAYS AND LOOP
// Q:2. Declare and initialize a multidimensional array
// representing the following matrix:
// var multiArray = [["0 " + "1 " + "2 " + "3 "], ["1 " + "0 " + "1 " + "2 "], ["2 " + "1 " + "0 " + "1 "]];
// // document.write(multiArray)
// for (var i = 0; i < multiArray.length; i++) {
//     document.write(`${multiArray[i]} <br />`)
// }


// Q:3. Write a program to print numeric counting from 1 to 10.
// for (var i = 1; i <= 10; i++) {
//     document.write(`${i} <br>`)
// }


// Q:4. Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.
// var tableNum = parseInt(window.prompt("Enter a number to show its multiplication table"));
// var tableLength = parseInt(window.prompt("Enter a length of multiplication table"));
// for (var i = 1; i <= tableLength; i++) {
//     document.write(`${tableNum} x ${i} = ${tableNum * i} <br>`)
// }


// Q:5. Write a program to print items of the following array using for loop:
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (var i = 0; i < fruits.length; i++) {
//     document.write(`Element at index ${i} is ${fruits[i]} <br>`)
// }


// Q:6. Generate the following series in your browser. See example output.
// document.write("<b>Counting:</b> <br> <br>")
// for (var i = 1; i <= 15; i++) {
//     document.write(`${i}, `)
// }


// REVERSE COUNTING
// document.write("<br><br><b>Reverse Counting:</b> <br> <br>")
// for (var i = 10; i >= 1; i--) {
//     document.write(`${i}, `)
// }


// EVEN
// document.write("<br><br><b>Even:</b> <br> <br>")
// for (var i = 0; i <= 20; i = i + 2) {
//     document.write(`${i}, `)
// }


// ODD
// document.write("<br><br><b>Odd:</b> <br> <br>")
// for (var i = 1; i <= 20; i = i + 2) {
//     document.write(`${i}, `)
// }

// SERIES
// document.write("<br><br><b>Series:</b> <br> <br>")
// for (var i = 2; i <= 20; i = i + 2) {
//     document.write(`${i}k, `)
// }


// 7. You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not
var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
var searchItem = window.prompt("Welcome to GQs bakery?  What do you want to order?").toLowerCase();
var itemMatch = false;
for (var i in bakeryItems) {
    if (searchItem == bakeryItems[i]) {
        itemMatch = true;
        document.write(`${searchItem} is available at index ${i} in our bakery`)
        break;

    }
}
if (itemMatch === false) {
    document.write(`We are sorry. ${searchItem} is not availablein our bakery`)
}



// Q:8. Write a program to identify the largest number in the given array.
// var numbers = [24, 53, 78, 91, 12];
// var largest = numbers[0];
// for (var i = 0; i < numbers.length; i++) {
//     if (largest < numbers[i]) {
//         largest = numbers[i]
//     }
// }
// document.write(`<b>Array items:</b> ${numbers} <br> The largest number is ${largest}`)



// Q:9. Write a program to identify the smallest number in the given array.
// var numbers = [24, 53, 78, 91, 12];
// var smallest = numbers[0];
// for (var i = 0; i < numbers.length; i++) {
//     if (smallest > numbers[i]) {
//         smallest = numbers[i]
//     }
// }
// document.write(`<br><br><b>Array items:</b> ${numbers} <br> The smallest number is ${smallest}`)



// Q:10. Write a program to print multiples of 5 ranging 1 to 100.
// var multipleOf = 5;
// for (var i = 1; i <= 20; i++) {
//     document.write(`${5 * i}, `)
// }


//task done
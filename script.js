
// var a = "ghoom phr k JS par he aagay na";
// alert(a);

var myName = "Ghulam Qadir";
myName = "Ghulam Qadir Sakaria";
console.log(myName);


// var num = 7;
// var multiply = num * 5;
// console.log(multiply);


// var modulus = 10 % 4;
// console.log(modulus);


// var num = 10;
// var incre = ++num;
// console.log(incre);



// var a = ((2 * 4) + 7);
// var b = (4 + 2) * (3 - 1);
// var c = a - b;
// console.log(c);


//marksheet
var urdu = 93;
var eng = 81;
var maths = 92;
var chem = 75;
var phy = 81.5;
var totalMarks = 500
var marksObt = urdu + eng + maths + chem + phy;
var percentage = (marksObt / totalMarks) * 100;
var perRound = percentage.toFixed(1);
console.log(`My percentage is ${perRound}`);



// var age = window.prompt("Enter your age", 11);
// var myAge = 17;
// var totalAge = parseInt(age) + myAge;
// console.log(totalAge);



// var userAge = window.prompt("Enter your age(00)")
// if (userAge >= 18 && userAge <= 50) {
//     console.log("You can enjoy this ride")
// }
// else {
//     console.log("Age restrictions");
// }


//if statements nested
// var num1 = 2;
// var num2 = 3;
// var num3 = 4;
// var num4 = 5;

// if (num1 + num2 == num4 || num1 + num4 == num4 && num2 + num3 == num1 + num4) {
//     console.log(++num1 + num2++ - num3 + num4)
// }
// else {
//     console.log("Required output is not obtained")
// }


//to check whether the given number is odd or even
// var num = window.prompt("Enter any integer(12)");
// if (num % 2 === 0) {
//     console.log("even number")
// }
// else if (num % 2 === 1) {
//     console.log("odd number")
// }


//palindrome number
// var checkPalin = window.prompt("enter number to check is it is palindrome or not");
// var convert = checkPalin.split("").reverse().join("");

// if (convert === checkPalin) {
//     console.log("Given number is palindrome")
// }
// else {
//     console.log("this is not a palindrome number")
// }
// console.log(convert);



// var myArr = [1, 2, 3, 4, 8, 19, 2, 3, 4, 5, 65];

// var largest = myArr[0];
// for (i = 0; i < myArr.length; i++) {
//     if (largest < myArr[i]) {
//         largest = myArr[i]
//     }
// }
// console.log(largest)

// var secondLarg = myArr[0];
// for (i = 0; i < myArr.length; i++) {
//     if (secondLarg < myArr[i] && largest > myArr[i]) {
//         secondLarg = myArr[i]
//     }
// }
// console.log(secondLarg)

// var thirdLarg = myArr[0];

// for (i = 0; i < myArr.length; i++) {
//     if (thirdLarg < myArr[i] && secondLarg > myArr[i]) {
//         thirdLarg = myArr[i]
//     }
// }
// console.log(thirdLarg)



//short method to find the largest second largest number in array
// var newArray = [19, 28, 2, 10, 32, 12,];

// var largest = newArray[0];
// var secondLarg = newArray[0];

// for (i = 0; i < newArray.length; i++) {
//     if (newArray[i] > largest) {
//         secondLarg = largest
//         largest = newArray[i]
//     }
// }
// console.log(secondLarg)


// chap 21
// var cities = ["karachi", "lahore", "peshawar", "islamabad"];
// var checkCity = window.prompt("Enter your city name")
// checkCity = checkCity.toLowerCase();
// var cityMatch = false;
// for (var i = 0; i < cities.length; i++) {
//     if (checkCity === cities[i]) {
//         cityMatch = true;
//         alert("your city is available in this list")
//     }
// }
// if (cityMatch === false) {
//     alert("your city is not available in this list")
// }



// chap 22
// var cities = ["Karachi", "Lahore", "Peshawar", "Islamabad"];
// var checkCity = window.prompt("Enter your city name")
// var firstChar = checkCity.slice(0, 1)
// firstChar = firstChar.toUpperCase();
// var otherChars = checkCity.slice(1)
// otherChars = otherChars.toLowerCase();
// var concatCity = firstChar + otherChars;
// var cityMatch = false;

// for (var i = 0; i < cities.length; i++) {
//     if (concatCity === cities[i]) {
//         cityMatch = true;
//         alert("your city is available in this list")
//     }
// }
// if (cityMatch === false) {
//     alert("your city is not available in this list")
// }


// var day = window.prompt("Enter a day");
// var charsInDay = day.length;
// var abbr;
// if (charsInDay > 3) {
//     abbr = day.slice(0, 3)
//     alert(abbr)
// }



//check for double spaces
// var string = window.prompt("Enter some text");
// for (var i = 0; i < string.length; i++) {
//     if (string.slice(i, i + 2) === "  ") {
//         alert("Double spaces found!")
//         break;
//     }
// }



// chap 23
// var text = 'The New Yorker magazine doesnt allow the phrase World War II. They say it should be....'
// var indexNum = text.indexOf("World War II")
// var firstText = text.slice(0, indexNum)
// var replacingText = "The Second World War"
// var lastText = text.slice(indexNum + 12)
// console.log(firstText + replacingText + lastText)



// chap 24 Finding a character at a location
// var a = "Ghulam Qadir"
// console.log(a.charAt(10))


// chap 25 Replacing Characters
// var para = "This is example, this is example 2";
// var replace = para.replace(/example/g, "text")
// console.log(replace)


// chap 26 Rounding Numbers
// var num = 34.1
// var round = Math.round(num)  //nearest value
// console.log(round)


// var num = 4.1
// var ceil = Math.ceil(num)  //higher value
// console.log(ceil)


// var num = 3.9
// var floor = Math.floor(num)  //lower value
// console.log(floor)



// chap 27 Generating Random Numbers
// var randomNum = Math.random();
// console.log(randomNum)


// toss game
// var headsUser = window.prompt("Enter heads user username")
// var tailsUser = window.prompt("Enter heads tails username")
// var random = Math.random() * 2
// var floor = Math.floor(random)
// console.log(floor)
// if (floor === 1) {
//     alert(`Heads: ${headsUser} wins `)
// }
// else {
//     alert(`Tails: ${tailsUser} wins `)
// }



// chap 30 Controlling the length of decimals
// var num = Math.random() * 5;
// var controlLength = num.toFixed(2) // decimal place control
// console.log(controlLength)




//chap 31 Getting the current date and time
// var date = new Date();
// console.log(date)



// var monthNames = ["Jan", "Feb", "March", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
// var currentDate = new Date();
// var month = currentDate.getMonth();
// var currentMonth = monthNames[month];
// console.log(currentMonth)




// Extracting parts of the date and time
// var date = new Date();
// console.log(date.getDay())           // day of week
// console.log(date.getMonth())        // month
// console.log(date.getDate())        // day of month
// console.log(date.getFullYear())   //  year
// console.log(date.getHours())     //  hour
// console.log(date.getMinutes()) //  minute
// console.log(date.getSeconds()) //  second
// console.log(date.getMilliseconds()) //  millisecond
// console.log(date.getTime()) //  Milliseconds since midnight, January 1, 1970





// chap 23 Specifying a date and time
//   AGE CALCULATOR
// var usersDob = new Date(prompt("Enter your date of birth\nLike this(Feb 21, 2005)"))
// var dobMilli = usersDob.getTime()
// var today = new Date();
// var todayMilli = today.getTime();
// var diffMilli = todayMilli - dobMilli
// var diffYear = diffMilli / (1000 * 60 * 60 * 24 * 30 * 12)
// var accuAge = Math.floor(diffYear)
// document.write(`Your are ${accuAge} years old`)



// Chap 34 Changing elements of a date and time
// var date = new Date();
// date.setFullYear(2000)
// date.setMonth(1)
// date.setDate(21)
// date.setHours(11)
// date.setMinutes(51)
// date.setSeconds(22)
// date.setMilliseconds(4)
// console.log(date)




// Chap 35 Functions
// function time() {
//     var date = new Date();
//     var hour = date.getHours();
//     var minutes = date.getMinutes();
//     document.write(`Time: ${hour}:${minutes}`)
// }
// time();



// Chap 36 Functions: Passing them data
// function multiply(a, b) {
//     console.log(a * b)
// }
// multiply(7, 5)




// chap 37 Functions: Passing data back from them
// var order = 2000;  //global variable (used anywhere)
// function calcTotal() {
//     var shipping = 5  //local variable (used within function)
//     var total = order + shipping;
//     return console.log(`Total of your order is: ${total}`)
// }
// calcTotal()



// CALCULATOR
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
//     else {
//         return "Incorrect Operator!"
//     }
// }

// var num1 = Number(prompt("Enter number 1"))
// var operator = prompt("Enter operator")
// var num2 = Number(prompt("Enter number 2"))

// console.log(calc(num1, operator, num2))




// Chap 39 & 40: switch statements: How to start them and how to complete them
// var day = new Date().getDay() //getting current day by index
// switch (day) {
//     case 0:
//         alert("It's fun day")
//         break;
//     case 6:
//         alert("It's fun day")
//         break;
//     default: alert("It's a working day 😐​")

// }





// chap 41: while loops
// var a = 1;
// while (a <= 10) {
//     console.log(a)
//     a++;
// }


// Chap:42 (do...while loops) always runs 1 time(no issue condition is false or true)
// var a = 1;
// do {
//     console.log(a)
//     a++;
// }
// while (a > 10);


// for loop nested(printing right angle triangle)
// for (var i = 0; i < 7; i++) {
//     for (j = 0; j < i; j++) {
//         document.write("*")
//     }
//     document.write("<br>")
// }



// palindrome word
// var word = prompt("Enter any word")
// var palin = "";
// for (var i = word.length - 1; i >= 0; i--) {
//     palin += word[i]
//     console.log(word.lastIndexOf())
// }
// console.log(word)
// console.log(palin)

// if (palin === word) {
//     alert(`${word} is a palindrome word`)
// }
// else {
//     alert(`${word} is not a palindrome word`)
// }



// chap 45 Events: link
// function greet() {
//     var input = prompt("Enter your name");
//     alert(`Hi ${input}`)
// }



// chap 45 Events: button
function buttonClick() {
    alert("function is running")
}



// chap 45 Events: mouse
function mouseOver() {
    console.log("Mouse over")
}


function mouseOut() {
    console.log("Mouse out")
}



// chap 49: events: reading field values
function getInputVal() {
    var inputVal = document.getElementById("input_val");
    alert(`Hi ${inputVal.value}`);
    inputVal.value = ""
}



// chap: 49 Setting field values
function setValue() {
    var inputVal = document.getElementById("input_val");
    inputVal.value = "Ghulam Qadir"
}
setValue()


// function setHeading() {
//     var para = document.getElementById('heading');
//     para.innerHTML = "This is Heading 1"
// }
// setHeading();
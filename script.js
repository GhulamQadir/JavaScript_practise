
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
// var text = 'The New Yorker magazine doesnt allow the phrase World War II. They say it should be ....'
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
var num = Math.random() * 5;
var controlLength = num.toFixed(2) // decimal place control
console.log(controlLength)
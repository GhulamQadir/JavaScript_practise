
var a = "ghoom phr k JS par he aagay na";
alert(a);

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


// to find the 2nd max val in an array
// var myArr = [2, 6, 4, 8, 12, 7];
// var largest = myArr[0];
// for (var i in myArr) {
//     if (i > largest) {
//         largest = i;
//     }
// }
// console.log(largest);


var myArr = [1, 2, 3, 4, 8, 19, 2, 3, 4, 5, 65];

var largest = myArr[0];
for (i = 0; i < myArr.length; i++) {
    if (largest < myArr[i]) {
        largest = myArr[i]
    }
}
console.log(largest)

var secondLarg = myArr[0];
for (i = 0; i < myArr.length; i++) {
    if (secondLarg < myArr[i] && largest > myArr[i]) {
        secondLarg = myArr[i]
    }
}
console.log(secondLarg)

var thirdLarg = myArr[0];

for (i = 0; i < myArr.length; i++) {
    if (thirdLarg < myArr[i] && secondLarg > myArr[i]) {
        thirdLarg = myArr[i]
    }
}
console.log(thirdLarg)
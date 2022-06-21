// Q:1. Write a custom function power ( a, b ), to calculate the value of a raised to b.
// function power(a, b) {
//     var pow = 1;
//     for (var i = 0; i < b; i++) {
//         pow = pow * a
//         // console.log(pow)
//     }
//     return pow
// }
// console.log(power(5, 3))



// Q:2. Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not.
// function leapYear() {
//     var year = Number(prompt("Enter any year"))
//     if (year % 4 === 0 && year != "") {
//         alert("This is a leap year")
//     }
//     else if (year == "") {
//         alert("Enter any year")
//     }
//     else {
//         alert("This is not a leap year")
//     }
//     return year;
// }
// console.log(leapYear())



// Q:3If the lengths of the sides of a triangle are denoted by a, b, and c, then area of triangle is given by

// function area(a, b, c) {
//     var area;
//     var s;
//     function where() {
//         s = (a + b + c) / 2
//         return s;
//     }
//     where();
//     area = s * (s - a) * (s - b) * (s - c);
//     return area;

// }

// console.log(area(2, 5, 5))



// Q:4. Write a function that receives marks received by a student in 3 subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction and other are for average and percentage. Call those functions from mainFunction and display result in mainFunction.
// var urdu = Number(prompt("Enter your Urdu marks"));
// var eng = Number(prompt("Enter your English marks"));
// var maths = Number(prompt("Enter your Maths marks"));
// var marksObt = urdu + eng + maths;
// var totalMarks = 225;
// var percentage;
// var average;

// function getAverage() {
//     average = (marksObt / 3).toFixed(2);
//     return `Average: ${average}`;
// }


// function getPercentage() {
//     percentage = ((marksObt / totalMarks) * 100).toFixed(2)
//     return `Percentage: ${percentage}%`;
// }

// function mainFunction() {
//     var func = [getAverage(), getPercentage()]
//     for (var i = 0; i < func.length; i++) {
//         document.write(`${func[i]}<br>`)
//     }
// }
// mainFunction();





// 5. You have learned the function indexOf. Code your own custom function that will perform the same functionality. You can code for single character as of now
// function findIndexOf() {
//     var string = "hello world~"
//     var splittedString = string.split("")
//     var findingChar = prompt("Enter the character of which you want to find the index")

//     for (var i = 0; i < splittedString.length; i++) {
//         if (splittedString[i] === findingChar) {

//             return alert(`index of ${findingChar} is ${i}`)

//         }
//     }
//     return alert("Character not found")

// }
// findIndexOf();



// Q:6. Write a function to delete all vowels from a sentence. Assume that the sentence is not more than 25 characters long
// function removeVowels() {
//     var sentence = "Learning mern stack development"
//     sentence = sentence.replace(/[aeiou]/gi, "");
//     return sentence;
// }
// console.log(removeVowels())



// Q:7. Write a function with switch statement to count the number of occurrences of any two vowels in succession in a line of text

// function countOccurences() {

//     var sentence = "Pleases read this application and give me gratuity heea";
//     var splittedSentence = sentence.split("");
//     var word = splittedSentence;
//     var newPair = []
//     var pair;

//     for (var i = 0; i < word.length - 1; i++) {
//         pair = word[i] + word[i + 1]

//         if (isVowel(pair[0]) && isVowel(pair[1])) {

//             newPair.push(pair)
//         }
//     }
//     document.write(`Such occurences are: ${newPair}`)
//     console.log(newPair.length)

//     function isVowel(pair) {
//         switch (pair) {
//             case "a":
//                 return true;
//             case "e":
//                 return true;
//             case "i":
//                 return true;
//             case "o":
//                 return true;
//             case "u":
//                 return true;

//         }return false;
//     }
// }
// countOccurences();



// Q:8. The distance between two cities (in km.) is input through the keyboard. Write four functions to convert and print this distance in meters, feet, inches and centimeters.
// var distance = Number(prompt("Distance between two cities in km"))
// document.write(`<center><h3>Distance in km is: ${distance}</h3>`)
// function distanceInMeters() {
//     distance = distance * 1000
//     return document.write((`Distance in meters is: ${distance}<br>`));
// }
// distanceInMeters()


// function distanceInFeet() {
//     distance = distance * 3280.84
//     return document.write((`Distance in feet is: ${distance}<br>`));
// }
// distanceInFeet()


// function distanceInInches() {
//     distance = distance * 39370.1
//     return document.write((`Distance in inches is: ${distance}<br>`));
// }
// distanceInInches()


// function distanceInCentimeters() {
//     distance = distance * 100000
//     return document.write((`Distance in centimeters is: ${distance}<br>`));
// }
// distanceInCentimeters()



// Q:9. Write a program to calculate overtime pay of employees.Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work for fractional part of an hour.
// function calcOverTime() {
//     var overtime = Number(prompt("How much hours you work overtime in this week?"))
//     var salary = 40000;
//     var total = salary + (overtime * 12);
//     return total;
// }
// console.log(calcOverTime())




// Q:10 A cashier has currency notes of denominations 10, 50 and 100. If the amount to be withdrawn is input through the keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the withdrawer
function notesDenominations() {
    var notes = [100, 50, 10, 1]
    var amount = Number(prompt("Enter amount to withdraw(in 10s or 100s)"));
    var distribution100 = Math.floor(amount / notes[0]);
    console.log(distribution100)

    var distribution50 = Math.floor((amount - (distribution100 * 100)) / notes[1])

    console.log(distribution50)

    var distribution10 = Math.floor((amount - (distribution100 * 100 + distribution50 * 50)) / notes[2])
    console.log(distribution10)

    var distribution1 = Math.floor((amount - (distribution100 * 100 + distribution50 * 50 + distribution10 * 10)) / notes[3])
    console.log(distribution1)


    return document.write(`You will have ${distribution100} hundred notes, ${distribution50} fifty notes, ${distribution10} ten notes and ${distribution1} one coins`)
}
notesDenominations();
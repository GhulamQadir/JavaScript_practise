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



// Q:6. Write a function to delete all vowels from a sentence. Assume that the sentence is not more than 25 characters long
// function removeVowels() {
//     var sentence = "Learning mern stack development"
//     sentence = sentence.replace(/[aeiou]/gi, "");
//     return sentence;
// }
// console.log(removeVowels())



// Q:8. The distance between two cities (in km.) is input through the keyboard. Write four functions to convert and print this distance in meters, feet, inches and centimeters.
var distance = Number(prompt("Distance between two cities in km"))
document.write(`<center><h3>Distance in km is: ${distance}</h3>`)
function distanceInMeters() {
    distance = distance * 1000
    return document.write((`Distance in meters is: ${distance}<br>`));
}
distanceInMeters()


function distanceInFeet() {
    distance = distance * 3280.84
    return document.write((`Distance in feet is: ${distance}<br>`));
}
distanceInFeet()


function distanceInInches() {
    distance = distance * 39370.1
    return document.write((`Distance in inches is: ${distance}<br>`));
}
distanceInInches()


function distanceInCentimeters() {
    distance = distance * 100000
    return document.write((`Distance in centimeters is: ${distance}<br>`));
}
distanceInCentimeters()

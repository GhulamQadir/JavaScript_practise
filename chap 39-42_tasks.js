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



// Q:If the lengths of the sides of a triangle are denoted by a, b, and c, then area of triangle is given by


function area(a, b, c) {
    var area;
    var s;
    function where() {
        s = (a + b + c) / 2
        return s;
    }
    where();
    area = s * (s - a) * (s - b) * (s - c);
    return area;

}

console.log(area(2, 5, 5))
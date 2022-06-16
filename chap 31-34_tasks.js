// DATE METHODS
// Q:1. Write a program that displays current date and time in your browser.
// var currentDate = new Date()
// document.write(currentDate)



// Q:2. Write a program that alerts the current month in words. For example December.
// var currentMonth = new Date().toLocaleDateString('en-us', { month: 'long' });
// document.write(currentMonth)



// Q:3. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var currentDate = new Date();
// var day = currentDate.getDay();
// var currentDay = dayNames[day];
// document.write(`Today is ${currentDay}`)



// Q:4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.
// var day = new Date().toLocaleDateString('en-us', { weekday: 'long' });
// if (day == "Saturday" || day == "Sunday") {
//     alert("It's Fun day!")
// }
// console.log(day)



// Q:5. Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”.
// var date = new Date().getDate()
// console.log(date)
// if (date < 16) {
//     alert("First fifteen days of the month")
// } else {
//     alert("Last days of the month")
// }



// Q:6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object.
// var currentDate = new Date();
// document.write(`Current Date: ${currentDate} <br>`)

// var getMilli = new Date().getTime();
// document.write(`Elapsed milliseconds since January 1, 1970: ${getMilli}<br>`);

// var getMinutes = getMilli / 60000
// document.write(`Elapsed minutes since January 1, 1970: ${getMinutes}`);



// Q:7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.
// var hour = new Date().getHours();
// if (hour < 12) {
//     alert("Its AM")
// }
// else {
//     alert("Its PM")
// }
// console.log(hour)



// Q:8. Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate.
// var laterDate = new Date("Dec 31, 2020")
// document.write(`Later date: ${laterDate}`)



// Q:9. Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan?
var ramzanDate = new Date("Apr 3, 2022").getTime()
var currentDate = new Date().getTime();
var getMilli = currentDate - ramzanDate;
var getDays = getMilli / (1000 * 60 * 60 * 24)
var roundOffDays = Math.round(getDays)
document.write(`${roundOffDays} days have passed since 1st Ramadan,2022`)
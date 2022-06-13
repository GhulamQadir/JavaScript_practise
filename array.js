
//arrays practise
var progLang = ["C#", "Python", true, "JavaScript", "Dart", 38];
// console.log(`right now I'm practising ${progLang[3]}`);

//  removing element at last
// progLang.pop();
// console.log(progLang);


// adding element at last
// progLang.push("Java", "TypeScript");
// console.log(progLang);


// removing element at start
// progLang.shift();
// console.log(progLang);


// adding element at first
// progLang.unshift("C++", "Swift");
// console.log(progLang);


// to add element anywhere you want
// var fruits = ["Apple", "Mango", "Banana", "Pineapple"];
// fruits.splice(1,"Orange", "Guava")
// console.log(fruits);


// to delete element anywhere you want
// fruits.splice(2, 1);
// console.log(fruits);

// to copy elements and make new array
// var newFruits = fruits.slice(0, 2)
// console.log(newFruits)



// CHECK ALL THE QUESTIONS ONE BY ONE

//assignment Q-7
// var qualifications = ["<ol><li>SSC</li>" + "<li>HSC</li>" + "<li>BCS</li>" +
//     "<li>BS</li>" + "<li>BCOM</li>" + "<li>MS</li>" + "<li>M. Phil.</li>" + "<li>PhD</li></ol>"];
// document.write(qualifications)


// Q-8
// var studScores = [320, 230, 480];
// var studNames = ["Michael", "John", "Tony"];
// var percentage;
// for (var i = 0; i < studScores.length; i++) {
//     percentage = studScores[i] / 500 * 100;
//     document.write(`Score of ${studNames[i]} is ${studScores[i]}. Percentage: ${percentage}% <br>`)
// }


// Q-9
// var colorNames = ["violet", " indigo", " blue", " green", " yellow", " orange", " red"];
// document.write(colorNames)

// var addAtStart = window.prompt("Which color you want to add to the beginning?").toLowerCase();
// colorNames.unshift(addAtStart);
// document.write(colorNames)

// var addAtLast = window.prompt("Which color you want to add to the end?").toLowerCase();
// colorNames.push(addAtLast)
// document.write(colorNames)

// adding two more colors
// colorNames.unshift("purple", " peach")
// document.write(colorNames)

// deleting first color
// colorNames.shift()
// document.write(colorNames)

// deleting last color
// colorNames.pop()
// document.write(colorNames)


// add color at index
// var indexNum = parseInt(window.prompt("At which index you want to add color?"))
// var addColorName = window.prompt("Enter color name").toLowerCase();
// colorNames.splice(indexNum, 0, addColorName);
// document.write(colorNames)


// delete color at index
// var delIndexNum = parseInt(window.prompt("At which index you want to delete color(s)?"))
// var colorsQuantity = parseInt(window.prompt("How many color(s) you want to delete?"))
// colorNames.splice(delIndexNum, colorsQuantity)
// document.write(colorNames)

// Q-9 done


// Q-10
// var studentsScores = [320, 230, 480, 120];
// document.write(`Scores of students: ${studentsScores}<br>`)
// studentsScores.sort();
// document.write(`Ordered Scores of students: ${studentsScores}<br>`)



// Q-11
// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// document.write(`Cities list:<br> ${cities}<br><br>`)

// var selectedCities = cities.slice(2, 4);
// document.write(`Selected Cities list:<br>${selectedCities}<br>`)


// Q-12
// var arr = ["This", "is", "my", "cat"]
// document.write(`Array:<br>${arr}<br><br>`)
// var joinArr = arr.join(" ");
// document.write(`String:<br>${joinArr}`)



// Q-13
var devices = ["keyboard", "mouse", "printer", "monitor"]
document.write(`Devices:<br> ${devices}<br><br>`)
for (var i = 0; i < devices.length; i++) {
    document.write(`Out:<br>${devices[i]}<br>`)
}


// Q-14
var devices = ["keyboard", "mouse", "printer", "monitor"]
document.write(`Devices:<br> ${devices}<br><br>`)

var reverseDevices = devices.reverse();
for (var i = 0; i < reverseDevices.length; i++) {
    document.write(`Out:<br>${reverseDevices[i]}<br>`)
}


// Q-15
// var phoneManu = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write(`<select name="devices">
// <option value="ipod">${phoneManu[0]}</option>
// <option value="radio">${phoneManu[1]}</option>
// <option value="computer">${phoneManu[2]}</option>
// <option value="computer">${phoneManu[3]}</option>
// <option value="computer">${phoneManu[4]}</option>
// <option value="computer">${phoneManu[5]}</option>
// </select>`)

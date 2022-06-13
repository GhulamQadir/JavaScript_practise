
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



//assignment Q-7
// var qualifications = ["<ol><li>SSC</li>" + "<li>HSC</li>" + "<li>BCS</li>" +
//     "<li>BS</li>" + "<li>BCOM</li>" + "<li>MS</li>" + "<li>M. Phil.</li>" + "<li>PhD</li></ol>"];
// document.write(qualifications)


// Q-8
var studScores = [320, 230, 480];
var studNames = ["Michael", "John", "Tony"];
var percentage;
for (var i = 0; i < studScores.length; i++) {
    percentage = studScores[i] / 500 * 100;
    document.write(`Score of ${studNames[i]} is ${studScores[i]}. Percentage: ${percentage}% <br>`)
}


// Q-9
var colorNames = ["violet", " indigo", " blue", " green", " yellow", " orange", " red"];
// document.write(colorNames)

// var addAtStart = window.prompt("Which color you want to add to the beginning?").toLowerCase();
// colorNames.unshift(addAtStart);
// document.write(colorNames)

// var addAtLast = window.prompt("Which color you want to add to the end?").toLowerCase();
// colorNames.push(addAtLast)
// document.write(colorNames)

//adding two more colors
// colorNames.unshift("purple", " peach")
// document.write(colorNames)

//deleting first color
// colorNames.shift()
// document.write(colorNames)

//deleting last color
// colorNames.pop()
// document.write(colorNames)


//add color at index
// var indexNum = parseInt(window.prompt("At which index you want to add color?"))
// var addColorName = window.prompt("Enter color name")
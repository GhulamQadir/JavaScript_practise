
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
var fruits = ["Apple", "Mango", "Banana", "Pineapple"];
fruits.splice(1, 2, "Orange", "Guava")
console.log(fruits);


// to delete element anywhere you want
fruits.splice(2, 1);
console.log(fruits);

// to copy elements and make new array
var newFruits = fruits.slice(0, 2)
console.log(newFruits)








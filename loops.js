// for loop
// var tableNum = window.prompt("Enter table number");
// var tableInt = parseInt(tableNum);
// for (var i = 1; i <= 10; i++) {
//     console.log(`${tableInt} x ${i} = ${tableInt * i}`)
// }


// to find the factorial of any number
// var num = window.prompt("Enter factorial number");
// var convertNum = parseInt(num)
// var factorial = 1;
// for (var i = num; i >= 1; i--) {
//     factorial *= i;
// }
// console.log(factorial);


// for loops boolean
// var provinces = ["sindh", "punjab", "balochistan", "khyber pakhtun khuwa"];
// var checkProvince = window.prompt("Enter your province name");
// var changeCase = checkProvince.toLowerCase();
// var boolVal = false;

// for (var i = 0; i < provinces.length; i++) {

//     if (changeCase === provinces[i]) {
//         boolVal = true;
//         console.log("This is the province of Pakistan")
//         break;
//     }
// }
// if (boolVal === false) {
//     console.log("This is not the province of Pakistan")
// }


// nested loop(printing pyramid)
var n = 10;
var star = "";
for (var i = 1; i <= n; i++) { // mentioning column
    for (var j = 0; j < i; j++) { // mentioning row
        star += "*";
    }
    star += "\n";
}
console.log(star);
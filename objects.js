
// chap 69: Objects
// var myProfile = {
//     name: "Ghulam Qadir",
//     email: "ghulamqadirsakaria25@gmail.com",
//     age: 17,
//     education: "Matriculate"
// }
// console.log(myProfile.email);

// // adding value(array) in object
// myProfile.skills = ["Mern Stack Developer", "Flutter Developer"]

// console.log(myProfile.skills[1])
// console.log(myProfile);

// var propertyExists = "age" in myProfile;
// console.log(propertyExists)



// chap 71: Objects: Methods
// var festival = {
//     name: "Eid",
//     price: 20,
//     discountMonths: [6, 7]
// }

// function calculation() {
//     var month = new Date();
//     var currentMonth = month.getMonth()
//     var price = festival.price;

//     for (var i = 0; i < festival.discountMonths.length; i++) {
//         if (festival.discountMonths[i] === currentMonth) {
//             console.log(price *16);
//             break;
//         }
//         return console.log(price * 20);
//     }
// }
// calculation()



// by using this method(it get the value of the standing object)
//30 percent discount example
// var festival = {
//     name: "Eid",
//     price: 20,
//     discountMonths: [6, 7],
//     calculation: function (dicountPercent) {

//         var month = new Date();
//         var currentMonth = month.getMonth()

//         for (var i = 0; i < this.discountMonths.length; i++) {
//             if (this.discountMonths[i] === currentMonth) {
//                 console.log(`After 30% discount: ${this.price * dicountPercent}`);
//                 break;
//             }
//             return this.price * 20
//         }
//     }
// }
// var getCalc = festival.calculation(15)




// chap 72: Objects: Constructors
// function BioData(name, email, age, skills) {
//     this.name = name,
//         this.email = email,
//         this.age = age,
//         this.skills = skills
// }
// var bio = new BioData("Ghulam Qadir", "ghulamqadirsakaria25@gmail.com", 17, ["Mern Stack developer", "Flutter developer"]);
// console.log(bio)




// chap 74: Objects: Prototypes

// Object.prototype.greeting = "Hello World" //used like this(student.greeting)

// var myFunctions = {
//     getFullName: function () {
//         return `${this.firstName} ${this.lastName}`
//     },

//     getAge: function () {
//         var age = new Date().getFullYear() - this.birthYear;
//         return age;
//     }
// }
// var student = {
//     firstName: "Ghulam Qadir",
//     lastName: "Sakaria",
//     birthYear: 2005,
// }

// var teacher = {
//     firstName: "Usama",
//     lastName: "Younus",
//     birthYear: 1995,
// }

// student.__proto__ = myFunctions;
// teacher.__proto__ = myFunctions;

// console.log(student.getAge())
// console.log(teacher.getAge())




//example 2 (with Constructor example)

var customFunctions = {
    add: function () {
        return this.num1 + this.num2
    },
    multiply: function () {
        return this.num1 * this.num2
    },
}
function Numbers(num1, num2) {
    this.num1 = num1
    this.num2 = num2
}

Numbers.prototype = customFunctions

var calc1 = new Numbers(3, 5)

console.log(calc1.multiply())



// example 3 (with Constructor)
function Festival(name, price, discountMonths) {
    this.name = name,
        this.price = price,
        this.discountMonths = discountMonths
}

Festival.prototype.calculation = function (dicountPercent) {
    var month = new Date();
    var currentMonth = month.getMonth()

    for (var i = 0; i < this.discountMonths.length; i++) {
        if (this.discountMonths[i] === currentMonth) {
            return `After 40% discount: ${this.price * dicountPercent}`;
            // break;
        }
        return this.price * 20
    }
}

var eidFestival = new Festival("Eid-ul-Fitr", 20, [6, 7])
console.log(eidFestival.calculation(12))
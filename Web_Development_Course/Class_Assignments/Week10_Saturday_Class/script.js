
console.log("**********************************************************")
console.log("Modules")
console.log("**********************************************************")
//Modules - split the code into multiple files
//Keyword - import and export
//Types   - named export and default export

import namedDefFunction, { name, city as location, add } from './named_export.js'
import defFunction from './default_export.js'

//accessing variable from named export file
console.log("From named export file:", name) 
console.log("Renamed variable from city to location:", location)

//accessing function from named export file
add(10, 20)
namedDefFunction('Mithra')

//accessing function from default export file
defFunction()

console.log("**********************************************************")
console.log("Rest parameter")
console.log("**********************************************************")

function restParam(a, b, ...restArray){
    console.log("Value of a:", a)
    console.log("Value of b:", b)
    console.log("Value of rest array:", restArray)
}

restParam(10, 20, 'Bootstrap', 'Flutter', 'Sql')

console.log("**********************************************************")
console.log("Arrow function")
console.log("**********************************************************")

const arrowFun = () => {
    console.log("Arrow function without parameter..")
}
arrowFun()

//Arrow function with parameter
const addition = (num1, num2) => {
    console.log("Sum of 2 numbers:", num1 + num2)
}
addition(10,20)

//Arrow function with default parameter
const greetMsg = (name, course = 'React web development') => {
    console.log(`Hi ${name}, Welcome to ${course}!`)
}
greetMsg('Selva') // passing name
greetMsg('Selva','Sql') // passing name and course

console.log("**********************************************************")
console.log("Destructuring")
console.log("**********************************************************")

//Destructuring arrays:
const items = ['Rasamalai', 'Biriyani', 'Oreo shake']
console.log(items[0]) //normal way to access array

const [sweet, food, drinks] = items
console.log(drinks) // destructuring

//Destructuring array in function:
function arithmetic(a, b){
    const plus = a + b
    const minus = a - b
    const multiple = a * b
    const divide = a / b
    return [plus, minus, multiple, divide]
}
const [plus, minus, multiple, divide] = arithmetic(20, 5)
console.log("Addition:", plus)
console.log("Subtraction:", minus)
console.log("Multiplication:", multiple)
console.log("Division:", divide)

//Destructing objects:
const employee = { empid: 'EId101', empname: 'Selva', designation: 'Developer', city: 'Chennai' }
console.log(employee.empname) //normal way to access object

const {empid, empname, designation, city} = employee
console.log(designation) //destructuring

console.log("**********************************************************")
console.log("Object prototype")
console.log("**********************************************************")

let vehicle = { type: 'car', model: 'Suzuki'}
let car = { tyres: 4, color: 'blue'}
let driver ={__vehiclesProto__:vehicle, __carProto__:car }
console.log(driver) // driver can access both objects 

console.log("**********************************************************")
console.log("Constructor")
console.log("**********************************************************")

//Object constructor function:
function personConst1(name, hobby, favFood, favPlace){
    this.name = name
    this.hobby = hobby
    this.favFood = favFood
    this.favPlace = favPlace
}
const person1 = new personConst1('Selva', 'Handcraft & Drawings', 'Amma Food', 'Our Home')
console.log(person1)

//Object constructor function with default property value:
function personConst2(name, hobby, favFood, favPlace){
    this.name = name
    this.hobby = hobby
    this.favFood = favFood
    this.favPlace = favPlace
    this.nationality = 'Indian'
}
const person2 = new personConst2('Selva', 'Handcraft & Drawings', 'Amma Food', 'Our Home')
console.log(person2)

//Adding a property to a constructor:
function personConst3(name, hobby, favFood, favPlace){
    this.name = name
    this.hobby = hobby
    this.favFood = favFood
    this.favPlace = favPlace
}
personConst3.prototype.nationality = 'Indian'
const person3 = new personConst3('Selva', 'Handcraft & Drawings', 'Amma Food', 'Our Home')
const person4 = new personConst3('Ramu', 'Travel & Watching videos', 'Biriyani', 'Kerala')
console.log(person3,person4)

//Adding method to the constructor:
function personConst4(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
    this.fullName = function(){
        this.name = this.firstName + this.lastName
    }
}
const person5 = new personConst4('Selva', 'Sundari')
const person6 = new personConst4('Jahan', 'Mithran')
person5.fullName()
person6.fullName()
console.log(person5,person6)

//Adding method to the Prototype property:
function personConst5(name, city, yearOfBirth){
    this.name = name
    this.city = city
    this.yearOfBirth = yearOfBirth
}
personConst5.prototype.calculateAge = function(){
    console.log("Age:"+ (2024 - this.yearOfBirth))
}
const person7 = new personConst5('Selva', 'Chennai', 1998)
person7.calculateAge()
console.log(person7)

//Class constructor with no parameter:
class program{
    constructor(){
        this.progLang1 = 'Sql'
        this.progLang2 = 'Java'
    }
}
const lang = new program()
console.log(lang)

//Class constructor with parameter:
class user{
    constructor(username){
        this.username = username
    }
    greet(){
        console.log(`Hi ${this.username}! Welcome to React web development..`)
    }
}
const person = new user('Selva')
person.greet()



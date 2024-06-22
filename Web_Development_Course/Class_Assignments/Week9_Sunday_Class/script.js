
console.log("**********************************************************")
console.log("Array prototype")
console.log("**********************************************************")

var array1 = [10,20,30,40,50]
var array2 = [1,2,3,4,5]
//at
console.log("Element in 2nd index:", array1.at(2))

//concat
console.log("Combine two arrays:", array2.concat(array1))

//entries
let array_entries = array1.entries()
console.log("Index and its element:", array_entries.next().value)

//fill
console.log("Fill with 0 from index 2 until index 4:", array1.fill(0, 2, 5));

//filter
const words = ['success', 'great', 'awesome', 'wonderful', 'happiness'];
const result = words.filter((word) => word.length > 6);
console.log("Word length greater than 6:", result)

//find
const found1 = array1.find((element) => element > 10);
console.log("Find element greater than 10 and immediately exit without finding next element:", found1)

//findIndex
const index1 = (element) => element > 1;
console.log("First large number index:", array2.findIndex(index1));

//findLastIndex
const index2 = (element) => element > 1;
console.log("From last, find First large number index:", array2.findLastIndex(index2));

//foreach
array2.forEach((element) => console.log(element));

//includes
console.log("Check array contains 2:", array2.includes(2))

//join
console.log("Array to string:", array2.join());

//reverse
console.log("Array in reverse:", array2.reverse())

//shift
let firstElement = array1.shift()
console.log("Shifted element:", firstElement)
console.log("Array after shift:", array1)

//slice
console.log(array1.slice(0, 3))

//map
let cbf2 = function(element, index, completeArray){
    return element * 2
}
let array_mul2 = array1.map(cbf2, this)
console.log("Array elements multiplied by 2:", array_mul2)

//reduce
const initialValue = 0 // initial value gets updated when accumulator + currentValue executed
const cbf3 = function(accumulator, currentValue, currentIndex){
    return accumulator + currentValue
}
let add = array1.reduce(cbf3, initialValue)
console.log("Sum of array elements:", add)

//sort
const numberArray = [40, 1, 200, 15, 1]
const stringArray = ['Burger', 'Shawarma', 'Pizza', 'Hamburger']
console.log(numberArray.sort())
console.log(stringArray.sort())

//sort number array either ascending or descending order
//a - b (if ascii value of a < b: sort [a,b]) ---> ascending
//b - a (if ascii value of a > b: sort [b,a])---> descending
//a = b (if ascii value of a = b: remains in same place)

function ascending(a, b) {
    return a - b;
}
function descending(a, b) {
    return b - a;
}
console.log(numberArray.sort(ascending))
console.log(numberArray.sort(descending))

console.log("**********************************************************")
console.log("Get object keys and values")
console.log("**********************************************************")

var obj = {name : 'Selva', age : 26, city : 'Chennai'}
let keys = Object.keys(obj)
let values = Object.values(obj)
console.log("Keys and values:", obj) 
console.log("Keys:", keys)            
console.log("values:", values)            

console.log("**********************************************************")
console.log("Scope of let, var and const")
console.log("**********************************************************")

//Function scope
//--------------
// function example(){
//     const pi = 3.14
// }
// console.log(pi) // Error: pi is not defined

function example(){
    const pi = 3.14
    console.log(pi) //correct way
}
example()

console.log("------***------***------***------***------***------***-----")

//Block scope
//-----------
//let and const are block scope, var is functional scope
// {
//     const pi = 3.14
// }
// console.log(pi) // Error: pi is not defined

{
    var pi = 3.14 //correct way
}
console.log(pi) 

console.log("------***------***------***------***------***------***-----")

//Global scope
//------------
//A variable declared outside a function, becomes global.

let name = "Selva";
function myFunction() {
    console.log("Name:", name) // code here can also use name
}
myFunction()

//Lexical scope
//-------------
//A function within a function can access the variable

var a = 10 // a can be accessed anywhere in this file
function lexFun(){
    var b = 20
    console.log("outer function:", a, b)
    function innerFun(){
        console.log("inner function:", a, b) // b is accessible
    }
    innerFun()
}
lexFun()
console.log("outside function(a) :", a) 
// console.log("outside function(b):", b) // b is not accessible here
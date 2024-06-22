
console.log("**********************************************************")
console.log("Type Conversion")
console.log("**********************************************************")

console.log("Implicit conversion/ Type cohersion:")
console.log("----------------------------------------------------------")
console.log(10 + '10', typeof(10 + '10'))
console.log('10' + 10, typeof('10' + 10))
console.log(10 * '10', typeof(10 * '10'))
console.log('10' * 10, typeof('10' * 10))
console.log(10 + true, typeof(10 + true))
console.log(true + 10, typeof(true + 10))
console.log('10' + true, typeof('10' + true))
console.log(true + '10', typeof(true + '10'))
console.log(10 == '10', typeof(10 == '10'))
console.log(null == 'null', typeof(null == 'null'))
console.log("------***------***------***------***------***------***-----")

console.log("Explicit conversion:")
console.log("----------------------------------------------------------")

console.log("String conversion:")
var string = 'selva'
var number = 10
var boolean = true
var null_value = null
var undef_value

var num_str = new String(number).valueOf()
console.log("Number to String:", num_str , "Datatype:", typeof(num_str))

var bool_str = new String(boolean).valueOf()
console.log("Boolean to String:", bool_str , "Datatype:", typeof(bool_str))

var null_str = new String(null_value).valueOf()
console.log("Null to String:", null_str , "Datatype:", typeof(null_str))

var undef_str = new String(undef_value).valueOf()
console.log("Undefined to String:", undef_str , "Datatype:", typeof(undef_str))
console.log("------***------***------***------***------***------***-----")

console.log("Number conversion:")

var str_num = new Number(string).valueOf()
console.log("String to Number:", str_num , "Datatype:", typeof(str_num))

var bool_num = new Number(boolean).valueOf()
console.log("Boolean to Number:", bool_num , "Datatype:", typeof(bool_num))

var null_num = new Number(null_value).valueOf()
console.log("Null to Number:", null_num , "Datatype:", typeof(null_num))

var undef_num = new Number(undef_value).valueOf()
console.log("Undefined to Number:", undef_num , "Datatype:", typeof(undef_num))
console.log("------***------***------***------***------***------***-----")

console.log("Boolean conversion:")

var str_bool = new Boolean(string).valueOf()
console.log("String to Boolean:", str_bool , "Datatype:", typeof(str_bool))

var num_bool = new Boolean(number).valueOf()
console.log("Number to Boolean:", num_bool , "Datatype:", typeof(num_bool))

var null_bool = new Boolean(null_value).valueOf()
console.log("Null to Boolean:", null_bool , "Datatype:", typeof(null_bool))

var undef_bool = new Boolean(undef_value).valueOf()
console.log("Undefined to Boolean:", undef_bool , "Datatype:", typeof(undef_bool))
console.log("------***------***------***------***------***------***-----")


console.log("**********************************************************")
console.log("Statement and expression")
console.log("**********************************************************")

let x = 10; //statement
let y = 10 * 20 + 30 //expression

console.log("**********************************************************")
console.log("Conditionals")
console.log("**********************************************************")

console.log("If condition")
console.log("----------------------------------------------------------")
console.log("Check whether my area of interest is in this list:")
var area_of_interest = 'Flutter'
if(area_of_interest == 'Angular' || 'Sql' || 'Flutter')
    console.log("Woww! Great to have Creative designer")
console.log("------***------***------***------***------***------***-----")

console.log("If else condition")
console.log("----------------------------------------------------------")
console.log("Check whether my age is eligible to vote or not:")
var age = 26
if(age > 18)
    console.log("Eligible to vote")
else
    console.log("Not eligible to vote")
console.log("------***------***------***------***------***------***-----")

console.log("else if ladder condition")
console.log("----------------------------------------------------------")
console.log("Check my score result:")
var mark_scored = '7.6 CGPA'
if(mark_scored > '7.5 CGPA')
    console.log("First class with distinction")
else if(mark_scored > '6.5 CGPA' && mark_scored < '7.5 CGPA')
    console.log("First class")
else if(mark_scored > '5.5 CGPA' && mark_scored < '6.5 CGPA')
    console.log("Second class")
else if(mark_scored > '5 CGPA' && mark_scored < '5.5 CGPA')
    console.log("Pass")
else
    console.log("Arrear")
console.log("------***------***------***------***------***------***-----")

console.log("switch case condition")
console.log("----------------------------------------------------------")   
var day = new Date()
var today = day.getDay()
switch(today){
    case 0: console.log("Sunday")
            break;
    case 1: console.log("Monday")
            break;
    case 2: console.log("Tuesday")
            break;
    case 3: console.log("Wednesday")
            break;
    case 4: console.log("Thursday")
            break;
    case 5: console.log("Friday")
            break;
    case 6: console.log("Saturday")
            break;
}
console.log("------***------***------***------***------***------***-----")


console.log("**********************************************************")
console.log("Array and its prototype")
console.log("**********************************************************")

console.log("create, access and modify array elements")
console.log("----------------------------------------------------------")

//create
var arr1 = []
var arr2 = [1,2,3,4,5]
var arr3 = new Array()
var arr4 = new Array(5)
var arr5 = new Array(6,7,8,9,10)

console.log("arr1",arr1)
console.log("arr2",arr2)
console.log("arr3",arr3)
console.log("arr4",arr4)
console.log("arr5",arr5)

//access
console.log("3rd element in arr5",arr5[2])

//modify
arr2[4] = 0
console.log("modified arr2 values",arr2)

//push(add elements to last index) 
arr1.push(10)
arr1.push(20)
console.log("pushing array elements",arr1)

//unshift(add elements to 0th index)
arr1.unshift(30)
arr1.unshift(40)
console.log("unshifting array elements",arr1)

//pop(delete elements from last index)
arr1.pop()
console.log("popping an array element",arr1)

//shift(delete elements from 0th index)
arr1.shift()
console.log("popping an array element",arr1)

console.log("Copy an array elements")
console.log("----------------------------------------------------------")

//Using the Spread Operator (…)
var array1 = [1,2,3,4,5]
var copiedArray1 = [...array1]
console.log("Copying array using spread operator", copiedArray1)

//Using slice() Method
var array2 = [10,20,30,40,50]
var copiedArray2 = array2.slice()
console.log("Copying array using slice method", copiedArray2)

//Using apply() Method
var array3 = [2,4,6,8,10]
var copiedArray3 = Array.apply(null, array3)
console.log("Copying array using apply method", copiedArray3)

//Using Array.concat() Method
var array4 = [1,3,5,7,9]
var copiedArray4 = [].concat(array4)
console.log("Copying array using concat method", copiedArray4)

//Using push() Method
var array5 = [9,99,999,9999,99999]
var copiedArray5 =[]
for (let i=0; i<array5.length; i++){
    copiedArray5.push(array5[i])
}
console.log("Copying array using concat method", copiedArray5)

//Using map() Method
var array6 = [11,22,33,44,55]
var copiedArray6 = array6.map(item => item)
console.log("Copying array using map method", copiedArray6)

console.log("toString")
console.log("----------------------------------------------------------")
//Does not change the original string.
//Can be used to convert a string object into a string.

var text = 'Love to code'
var to_str = text.toString()
console.log("Using toString....", to_str)


console.log("**********************************************************")
console.log("Multi-dimensional array")
console.log("**********************************************************")

//Example: Salary details of the employees using multi-dimensional array

//create and print multi-dimensional array:
let emp_details = [
                    ['EmpId-101', 'Selva', 20000], 
                    ['EmpId-102', 'VS', 90000], 
                    ['EmpId-103', 'Mithra', 25000],
                    ['EmpId-104', 'Ramu', 105000]
                  ]
console.log("Employee salary details:", emp_details)

//accessing specific employee details:
console.log("Selva's salary:", emp_details[0][2])

//add new employee salary details:
emp_details.push(['EmpId-105', 'Harsha', 75000])
console.log("Pushing new array elements:", emp_details)

//add another element in inner array:
emp_details[0][3] = 'Chennai'
emp_details[2][3] = 'Hyderabad'
emp_details[4].push('Mysore')
console.log("Adding another element in inner array:", emp_details)

//Modify inner array element:
emp_details[4][3] = 'Bangalore'
console.log("Update city in inner array:", emp_details[4])

//remove specific employee details:
emp_details.splice(2,1)
console.log("Deleting specific employee's details:", emp_details)

//remove employee details:
emp_details.pop()
console.log("Deleting employee details:", emp_details)

//remove specific employee's city:
emp_details[2].pop()
console.log("Deleting specific employee's city:", emp_details)
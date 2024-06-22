
console.log("**********************************************************")
console.log("Loops")
console.log("**********************************************************")

console.log("While loop:")
console.log("----------------------------------------------------------")
//print numbers from 0 to 5
var number1 = 0
console.log("Loop start")
while(number1 <= 5){
    console.log(number1)
    number1++
}
console.log("Loop End")
console.log("------***------***------***------***------***------***-----")

console.log("do..while loop:")
console.log("----------------------------------------------------------")
//print numbers from 0 to 5
var number2 = 0
console.log("Loop start")
do{
    console.log(number2)
    number2++
}while(number2 >= 5)
console.log("Loop End")
console.log("------***------***------***------***------***------***-----")

console.log("for loop:")
console.log("----------------------------------------------------------")
//sum of first 5 natural numbers
var sum = 0
for (let index = 1; index <= 5; index++){
    sum = sum + index;
}
console.log("Sum of first 5 natural numbers..", sum)
console.log("------***------***------***------***------***------***-----")

//for loop with array
var array = [10,20,30,40,50]
console.log("Values in array..")
for (let index = 0; index < array.length; index++){
    console.log(array[index])
}
console.log("------***------***------***------***------***------***-----")

//for loop with multi-dimensional array
var employee_details = [
                            ['EmpId101','Selva',26,'Chennai'],
                            ['EmpId102','Ramu',27,'Mysore'],
                            ['EmpId103','VS',31,'Bangalore']
                        ]
console.log("Employee names...")
for(let outer_index = 0; outer_index < employee_details.length; outer_index++){
    for(let inner_index = 0; inner_index < employee_details[outer_index].length; inner_index++){
        console.log(employee_details[outer_index][1])
    }
}
console.log("------***------***------***------***------***------***-----")

//for loop with 'continue' statement(skip only that iteration)
console.log("Multiples of 5 from 1 to 10...")
for (let i=1; i <= 10; i++){
    if(i % 5 != 0)
        continue
    console.log(i)
}
console.log("------***------***------***------***------***------***-----")

//for loop with 'break' statement(exit from the loop)
for (let i=1; i <= 10; i++){
    if(i % 5 == 0)
        break
    console.log(i)
}

console.log("**********************************************************")
console.log("Function")
console.log("**********************************************************")
//sum of 2 numbers
function add(num1, num2){
    return num1 + num2
}
let result = add(10,20)
console.log("Sum of the given number is", result)


console.log("**********************************************************")
console.log("Call back function")
console.log("**********************************************************")
function mainFunction(callback){
    console.log("Looking for callback function...")
    callback("callback function found...") //step2: calling callback function
}
function callbackFunction(message){
    console.log(message) //step3: returning message
}
mainFunction(callbackFunction) //step 1: calling mainfunction

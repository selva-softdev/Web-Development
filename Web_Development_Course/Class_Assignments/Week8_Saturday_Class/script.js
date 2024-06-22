
console.log("**********************************************************")
console.log("Primitive datatypes - Immutable(Values cannot be changed")
console.log("**********************************************************")

console.log("Number:")
var number_1 = 1;
var number_2 = new Number(2);
console.log("Typeof 'var number_1 = 1' : ",typeof number_1)
console.log("Typeof 'var number_2 = new Number(2)' : ",typeof number_2)
console.log("------***------***------***------***------***------***-----")

console.log("String:")
var string_1 = 'Selva';
var string_2 = new String('Selva');
console.log("Typeof 'var string_1 = 'Selva'' : ",typeof string_1)
console.log("Typeof 'var string_2 = new String('Selva')' : ",typeof string_2)
console.log("------***------***------***------***------***------***-----")

console.log("Boolean:")
var boolean_1 = true;
var boolean_2 = new Boolean(false);
console.log("Typeof 'var boolean_1 = true' : ",typeof boolean_1)
console.log("Typeof 'var boolean_2 = new Boolean(false)' : ",typeof boolean_2)
console.log("------***------***------***------***------***------***-----")

console.log("Null:")
var null_value = null;
console.log("Typeof 'var null_value = null' : ",typeof null_value)
console.log("------***------***------***------***------***------***-----")

console.log("Undefined:")
var undefined_value;
console.log("Typeof 'var undefined_value' : ",typeof undefined_value)
console.log("------***------***------***------***------***------***-----")

console.log("Symbol: Used for unique value(id)")
var symbol_value = Symbol();
console.log("Typeof 'var symbol_value = Symbol()' : ",typeof symbol_value)
console.log("------***------***------***------***------***------***-----")


console.log("*****************************************************")
console.log("Try out:")
console.log("*****************************************************")

console.log("NaN === NaN --->", NaN === NaN)
console.log("null === null --->", null === null)
console.log("0 === -0 --->", 0 === -0)


console.log("*****************************************************")
console.log("Backtick, Single quotes and Double quotes:")
console.log("*****************************************************")

console.log("Backtick: Single and double quotes can be used within backtick")
console.log("Example-1:")
console.log(`I'm Selvasundari and I like my dog "Gundu" very much`)
console.log("------***------***------***------***------***------***-----")

console.log("Example-2:")
let name = 'Selvasundari';
let course_name = 'Web Development';
let platform = 'Odin School';
console.log("`${name} is learning ${course_name} course in ${platform}` --->", `${name} is learning ${course_name} course in ${platform}`);
console.log("------***------***------***------***------***------***-----")

console.log("To add multi-line string, use backtick")
let paragraph = `I am Selvasundari.
Currently I am learning Web Development course in Odin School.
This bootcamp is for 3months.`
console.log(paragraph)
console.log("------***------***------***------***------***------***-----")

console.log("Single quotes: Single quotes can be used within double quotes")
console.log("Example:")
console.log("I'm Selvasundari")
console.log("------***------***------***------***------***------***-----")

console.log("Double quotes: Double quotes can be used within single quotes")
console.log("Example:")
console.log('I like my dog "Gundu" very much')
console.log("------***------***------***------***------***------***-----")


console.log("*****************************************************")
console.log("Ways to create object:")
console.log("*****************************************************")

console.log("Creating object with a constructor")
console.log("Using object literals")
console.log("Creating object with Object.create() method")
console.log("Using es6 classes")


console.log("**********************************************************")
console.log("Object datatype - Mutable(Values can be changed")
console.log("**********************************************************")

console.log("Create, add and modify properties in object:")
var my_details = {name:"Selva", age:26, degree:"BCA"};
console.log("My Personal details:", my_details)

my_details.city = 'Chennai';
my_details['mobno'] = '0011223344';
console.log("Added new property:", my_details)

my_details.mobno = '9988776655';
console.log("Modified mobno:", my_details)
console.log("------***------***------***------***------***------***-----")

console.log("Date:")
var today = new Date()
console.log("Today's date and current time :", today)
console.log("Date :", today.getDate())
console.log("Month :", today.getMonth())
console.log("Year :", today.getFullYear())
console.log("------***------***------***------***------***------***-----")











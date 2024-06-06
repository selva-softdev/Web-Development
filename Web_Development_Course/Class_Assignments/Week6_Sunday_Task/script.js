
console.log("*****************************************************")
console.log("Variable Declaration")
console.log("*****************************************************")

console.log("Declare using 'var' : var number_1;")
console.log("Declare using 'let' : let number_2;")
console.log("Declare using 'const' : const pi = 3.14;")
console.log("Declare without using keywords : first_name = 'Selva';")


console.log("*****************************************************")
console.log("Values Initialization and its Datatype")
console.log("*****************************************************")

console.log("Datatype 'Number' : let age = 26;")
let age = 26;
console.log("Output: ",age)
console.log("Datatype: ",typeof age)
console.log("------***------***------***------***------***------***-----")


console.log("Value as 'String' : let firstName = 'Selva';")
let firstName = 'Selva';
console.log("Output: ",firstName)
console.log("Datatype: ",typeof firstName)
console.log("------***------***------***------***------***------***-----")

console.log("Value as 'Boolean' : let eligible_to_vote = true;")
let eligible_to_vote = true;
console.log("Output: ",eligible_to_vote)
console.log("Datatype: ",typeof eligible_to_vote)
console.log("------***------***------***------***------***------***-----")

console.log("Value as 'Array' : const skills = ['SQL' , 'HTML' , 'CSS'];")
const skills = ['SQL' , 'HTML' , 'CSS'];
console.log("Output: ",skills)
console.log("Datatype: ",typeof skills)
console.log("------***------***------***------***------***------***-----")

console.log("Value as 'Object' : const full_name = {firstName:'Selva', lastName:'Sundari'};")
const full_name = {firstName:'Selva', lastName:'Sundari'};
console.log("Output: ",full_name)
console.log("Datatype: ",typeof full_name)
console.log("------***------***------***------***------***------***-----")

console.log("Value as 'Function' : function sum(10,5) {};")
console.log("Datatype: ",typeof function () {})
console.log("------***------***------***------***------***------***-----")

console.log("Datatype 'Date' : const date = new Date('1998-11-05');")
const birth_date = new Date('1998-11-05');
console.log("Output: ",birth_date)
console.log("Datatype: ",typeof birth_date)
console.log("------***------***------***------***------***------***-----")

console.log("Datatype 'Undefined' : var marks_scored;")
var marks_scored;
console.log("Output: ",marks_scored)
console.log("Datatype: ",typeof marks_scored)
console.log("------***------***------***------***------***------***-----")

console.log("Datatype 'Null' : var work_experience = null;")
var work_experience = null;
console.log("Output: ",typeof work_experience)
console.log("Datatype: ",typeof work_experience)


console.log("*****************************************************")
console.log("Aritmetic operator")
console.log("*****************************************************")

console.log("Addition(+) 10+5 =", 10+5)
console.log("Subtraction(-) 10-5 =", 10-5)
console.log("Multiplication(*) 10*5 =", 10*5)
console.log("Division(/) 10/5 =", 10/5)
console.log("Modulus (Remainder)(%) 10%5 =", 10%5)
console.log("Exponentiation (Power)(**) 10**2 =", 10**2)
let pre_increment = 5;
console.log("Pre Increment(++) ++5", ++pre_increment)
let pre_decrement = 5;
console.log("Pre Increment(--) --5", --pre_decrement)


console.log("*****************************************************")
console.log("Assignment operator")
var number_1 = 10;
var number_2 = 5;
console.log("Number_1(x):",number_1)
console.log("Number_2(y):",number_2)
console.log("*****************************************************")

console.log("Operator(+=) x+=y same as: x = x + y ", number_1 += number_2)
console.log("Operator(-=) x-=y same as: x = x - y ", number_1 -= number_2)
console.log("Operator(*=) x*=y same as: x = x * y ", number_1 *= number_2)
console.log("Operator(/=) x/=y same as: x = x / y ", number_1 /= number_2)
console.log("Operator(%=) x%=y same as: x = x % y ", number_1 %= number_2)
console.log("Operator(**=) x**=y same as: x = x ** y ", number_1 **= number_2)
let course = 'Welcome to ';
console.log("String concatenation: let course = 'Welcome to '; course += 'WD course'")
console.log("Ouput:",course += 'WD course')

console.log("*****************************************************")
console.log("Comparison operator")
const number1 = 10;
const number2 = 5;
const number1_string = "10";
console.log("Number1(x):",number1)
console.log("Number2(y):",number2)
console.log("number1('x') as string:",number1_string)
console.log("*****************************************************")

console.log("equal to(==) x==y ", number1 == number2)
console.log("equal to(==) x==x ", number1 == number1)
console.log("equal to(==) x=='x' ", number1 == number1_string)
console.log("------***------***------***------***------***------***-----")

console.log("equal value and equal type(===) x===x ", number1 === number1)
console.log("equal value and equal type(===) x==='x' ", number1 === number1_string)
console.log("------***------***------***------***------***------***-----")

console.log("not equal(!=) x!=y ", number1 != number2)
console.log("------***------***------***------***------***------***-----")

console.log("not equal value or not equal type(!==) x!==y ", number1 === number2)
console.log("not equal value and equal type(!==) x!==x ", number1 !== number1)
console.log("not equal value and equal type(!==) x!=='x' ", number1 === number1_string)
console.log("------***------***------***------***------***------***-----")

console.log("greater than(>) x>y ", number1 > number2)
console.log("greater than or equal to (>=) x>=y ", number1 >= number2)
console.log("less than(<) x<y ", number1 < number2)
console.log("less than or eqaul to (<=) x<=y ", number1 <= number2)


console.log("*****************************************************")
console.log("Logical operator")
const x = 10;
const y = 5;
console.log("*****************************************************")

console.log("and (&&): (x < 15) && (y > 1)", (x < 15) && (y > 1))
console.log("or (||): (x == 5) || (y == 10)", (x == 5) || (y == 10))
console.log("not (!): !(x == y)", !(x == y))


console.log("*****************************************************")
console.log("Conditional(Ternary) operator")
console.log("age:26")
console.log("*****************************************************")

let vote_eligibility = (age < 18) ? "Too young to vote":"Old enough to vote";
console.log("Syntax--> Condition ? True : False")
console.log("(age < 18) ? 'Too young to vote' : 'Old enough to vote'")
console.log(vote_eligibility)


console.log("*****************************************************")
console.log("Bitwise operator")
console.log("JS uses 32-bit operands")
console.log("Binary value of 5: 0101")
console.log("Binary value of 1: 0001")
console.log("*****************************************************")

console.log("AND(&) 5 & 1 = ", 5 & 1)
console.log("OR(|) 5 | 1 = ", 5 | 1)
console.log("XOR(^) 5 ^ 1 = ", 5 ^ 1)
console.log("NOT(~) ~5 = ", ~5)
console.log("Zero fill left(<<) 5 << 1 = ", 5 << 1)
console.log("Zero fill right(>>>) 5 >>> 1 = ", 5 >>> 1)
console.log("Zsigned right shift(>>) 5 >> 1 = ", 5 >> 1)




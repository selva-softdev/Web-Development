//A file can have only 1 default function

export const name = 'Selva'
export const city = 'Chennai'

export function add(num1, num2){
    console.log("Sum of 2 numbers:", num1 + num2)
}

export default function namedExportFunction(name){
    console.log(`Hi ${name}! You're accessing named export file function...`)
}
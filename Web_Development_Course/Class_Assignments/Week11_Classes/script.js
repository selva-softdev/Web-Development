//Set timeout:
console.log("Execution started")  //1
function sync(){
    console.log('Execution starts after function call') //3
    console.log('This line will executed next') //4
}
sync() //2
setTimeout(() => console.log('This will execute 2nd  ie, after 2msec'), 2000) //7
setTimeout(() => console.log('This will execute 1st ie, after 1msec'), 1000) //6
console.log('Global execution ended, control goes to queue') //5

//setInterval(() => console.log('Use setinterval for executing the action repeatedly'),2000)

//Event loop: Call stack --> Browser(Timeout) --> Queue(wait for stack until empty)

//Promise:
//Example 1:
function bookTatkal(){
    return new Promise((resolve, reject) => {
        let bookingSuccess = true
        if(bookingSuccess)
            resolve(1095)
        else
            reject()
    })
}
bookTatkal()
.then((amount) => {console.log(`Thanks Machii, I have transfered ${amount}!`)})
.catch(() => {console.log('Thanks for trying! I will book a bus.')})

//Example 2:
let reachHome1 = new Promise((resolve, reject) => {
                    let reached = true
                    if(reached)
                        setTimeout(resolve, 3000, 'Selva has reached')
                    else
                        reject('Selva not reached')
                })

let reachHome2 = new Promise((resolve, reject) => {
                    let reached = false
                    if(reached)
                        setTimeout(resolve, 4000, 'Ramu has reached')
                    else
                        reject('Ramu not reached')
                })

let reachHome3 = new Promise((resolve, reject) => {
                    let reached = true
                    if(reached)
                        setTimeout(resolve, 1000, 'Mithra has reached')
                    else
                        reject('Mithra not reached')
                })

// Promise.all([reachHome1,reachHome2,reachHome3])
// .then((message) => {console.log(message)})
// .catch((message) => {console.log(message)})

// Promise.allSettled([reachHome1,reachHome2,reachHome3])
// .then((message) => {console.log(message)})
// .catch((message) => {console.log(message)})

// Promise.any([reachHome1,reachHome2,reachHome3])
// .then((message) => {console.log(message)})
// .catch((message) => {console.log(message)})

Promise.race([reachHome1,reachHome2,reachHome3])
.then((message) => {console.log(message)})
.catch((message) => {console.log(message)})
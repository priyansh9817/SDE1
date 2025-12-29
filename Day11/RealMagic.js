console.log("Start")
setTimeout(()=>{
    console.log("TIMEOUT")
},0)
Promise.resolve().then(()=>{
    console.log("Promise")
});
console.log("END")



// OUT PUT will be 

// Start
// End
// Promise
// Timeout
// ############################# Executions ####################

// 1️⃣ Synchronous code (Call Stack)
// Start
// End

// 2️⃣ Promise → Microtask Queue
// Promise

// 3️⃣ setTimeout → Callback Queue
// Timeout


// 📌 Isliye Promise pehle chalta hai
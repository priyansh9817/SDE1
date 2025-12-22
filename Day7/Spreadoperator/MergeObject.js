let student = {name:"Priyanshu"}
let student1 = {age:12, address : "Bihar"}
let studentcopy = {...student,...student1}

console.log(studentcopy)
// This is MERGE Object using Spread 
// yhaa pe hm use spread issliye kiye hi kyu ki do object ko saath me add kare ge 


// Overwrite Values (Order Matters ⚠️)

let obj = { name: "Devil", age: 22 };
let updated = { ...obj, age: 23 };

console.log(updated);

// Practice of Arrow function 


const studendetail = () => ({name:"Doraemon", age: 20});
let {name,age} = studendetail();
console.log(name,age)

 // using of arrow function

let numbers = [1, 2, 3, 4];

let squares = numbers.map(n => n * n);
console.log(squares);

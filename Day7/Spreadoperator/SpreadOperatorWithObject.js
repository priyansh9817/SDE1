let student = {
    name : "Priyanshu",
    age : 21
};

let studentcopy = {...student}

studentcopy.name = "Devil"

console.log(student)  
console.log(studentcopy)
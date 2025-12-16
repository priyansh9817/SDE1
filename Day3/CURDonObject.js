// CURD operation on object 

let student = {
    name :"Devil",
    age : 22,
    city : "Begusarai",
    rollNo : 1246
}
console.log(student)
student.age = 23; // update 
console.log(student)
student.branch = "CSE"; // ADD
console.log(student)
delete student.rollNo; // Delete 
console.log(student)


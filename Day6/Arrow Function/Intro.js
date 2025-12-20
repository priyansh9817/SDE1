// Traditional way to write  function 

function studentdetails(){
    return {
        name : "Devil",
        age : 31
    }
}

let {name, age} = studentdetails();

console.log(name, age)



// Modern Way to write functions 


const studentdetail = () => ({name:"Priyanshu", age:21});
let {name : names , age : ages} = studentdetail();   
console.log(names,ages)

// Why we write this {name : names , age : ages} above line of code bcz yaha pe name pe phele se data assign hai memory me issliye 
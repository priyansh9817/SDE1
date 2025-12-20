// Function Returning Object using arrow function

const getprofile = () =>{
    return{
        name : "Sukhvinder-Kaur",
        age : 21,
        address : "Yamunanagar"
    };
};

let {name,age,address} = getprofile();
console.log(age,name,address);

console.log(getprofile())
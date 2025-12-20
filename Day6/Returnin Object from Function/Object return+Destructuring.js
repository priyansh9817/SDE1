// Object return + Destructuring (Clean Code ⭐)

function getprofile(){
    return {
        name : "Devil",
        age : 21
    };
}

let {name,age} = getprofile();
console.log(name,age);

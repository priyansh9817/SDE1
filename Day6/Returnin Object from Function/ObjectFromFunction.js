// By taking an input return an object 

function student(name,city, pincode){
    return {
        name : name,
        city : city,
        pincode : pincode
    }
}

let s1 = student("Devil", "Begusarai",1234); // here we take first as an input then return object 
let s2 = student("Doraemon","YamunaNagar",133202);

console.log(s1)
console.log(s2)



//  Short hand synatx

function Sdetails(name, city, age){
    return{name,city,age};
};

let s = Sdetails("Devil", "Begusarai",1234); // here we take first as an input then return object 
let st = Sdetails("Doraemon","YamunaNagar",133202);

console.log(s)
console.log(st)
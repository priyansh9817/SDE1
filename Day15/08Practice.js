function CreateProfile ({name,Rollno,city,pincode,}){
    return{
        name:name,
        Rollno:Rollno,
        city : city,
        pincode : pincode
    }
};

let s1 = CreateProfile("Priyanshu", 11222803,"Begusarai",851101);
let s2 = CreateProfile("Sukhvinder Kaur", 11222634,"YamunaNagar",133203)
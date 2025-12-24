const loginUser = (email,password) => {
    return new Promise ((resolve,reject)=>{
        if(email === "devil@.com" && password == "1234"){
            resolve({success:true, user:"Priyanshu",message: "Login success-Fully"})
        }
        else{
            reject({success:false,message:"Invalid Credintaial"})
        }
    });
}

loginUser("devil@.com","1234")
.then(res=>console.log(res.user,res.message)) // yaha pe 
.catch(err=>console.log(err.message))
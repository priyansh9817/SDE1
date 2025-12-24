const userObject = (email, password) =>{
    return new Promise ((resolve,reject)=>{
        if(email === "priyanshuKumar1234tu@gmail.com", password === "1234" ){
            resolve({success:true,
                user:{
                    email,
                    role : "admin"
                },
                message : "Login Sucessfully"
            })
        }else{
            reject({success:false,message:"Invalid Credential"})
        }
    });
};
userObject("priyanshukumar1234tu@gmail.com","1234")
.then(res=>console.log(res.user.email,res.user.role,res.message))
.catch(res=>console.log(res.message))
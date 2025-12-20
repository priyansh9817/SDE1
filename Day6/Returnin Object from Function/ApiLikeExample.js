// here we  learn how to write an API 
function loginUser (email,password){
  if(email==="priyanshu98@gmail.com" && password === 12345){
    return{
      success:true,
      message :"Login successful"
    };
  }
  else{
    return{
      success:false,
    message : "Login Successful"
    }
  }
}
  let response = loginUser("priyanshu98@gmail.com", 12345);

  if(response.success){
    console.log(response.message)
}


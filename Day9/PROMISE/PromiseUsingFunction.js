const interviewResult = () =>{
    return new Promise((resolve, reject)=>{
        let result = true;
        if(result){
            resolve("Congratulations! You are selected");
        }else{
            reject("Sorry, try again")
        }
    });
}

interviewResult()
    .then(msg=>console.log(msg))
    .catch(err=>console.log(err));

    
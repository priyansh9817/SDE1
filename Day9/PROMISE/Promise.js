let promise =  new Promise ((resolve, reject)=>{
    let success = false;
    if(success){
        resolve("Task Successful");
    }
    else{
        reject("Task Unsuccessful");
    }
    
});

promise
  .then(result => console.log(result))
  .catch(error => console.log(error));
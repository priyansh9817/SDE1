function fetchuser (callback){
    setTimeout(()=>{
        callback({
            name : "Priyanshu",
            age : 21
        });
    },2000)
}

fetchuser((user)=>{
    console.log(user.name,user.age)
})

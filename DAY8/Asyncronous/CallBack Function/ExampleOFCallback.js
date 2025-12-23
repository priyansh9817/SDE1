// Without callBack Function 

function download(){
    setTimeout(()=>{
        console.log("Your File is Downloaded without callback");
    },2000);
}

let file = download();
console.log("use File without callback", file)     // use File undefined
                                //   Your File is Downloaded 


// With CallBack FUnction

const downloadFile =(callback) =>{
    setTimeout(()=>{
        callback("File Download Successfully");
    },5000);
} 

downloadFile((message)=>{
    console.log(message);
});
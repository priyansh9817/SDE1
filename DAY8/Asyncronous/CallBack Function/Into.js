// CallBack Function


// function x(){
//     console.log("Hey");
  
// }
// function y(){
//     console.log("Hello");
// }


// ############# Output it will nothing show bcz we doesn't call any function
setTimeout(()=>{
    console.log("Set Time out ")
},2000)
function x(y) {
    console.log("Hey");
    y()
}
x(function y(){
    console.log("Hello")
});

//  Without callback() Function 
function greet (name) {
    console.log("hello"+ name);
    
}
function saybye (){
    console.log("Bye");
}

greet("Priyanshu", saybye)    // output - helloPriyanshu


// With Callback() Function

function Student(name,callback){
    console.log("Hi There 👋 " + name)
    callback();
}
function Stream(){
    console.log("Your Stream is B.Tech CSE ");
}

Student("Devil",Stream)  // Output - Hi There 👋 Devil
                                // Your Stream is B.Tech CSE 
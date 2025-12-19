let student = {
    name : "Devil",
    city : "Begusarai",
    Pincode : 851101,
}

function StudentDetails(s){
    console.log(s.name);
    console.log(s.Pincode)
    // console.log(Pincode)     it shows reference error 
}
StudentDetails(student)




// 3️⃣ Function call
// StudentDetails(student);


// 📌 Yahan:

// student → argument

// s = student

// Matlab:

// s = {
//   name: "Devil",
//   city: "Begusarai",
//   Pincode: 851101
// }

// 4️⃣ Function ke andar access
// console.log(s.name);     // Devil
// console.log(s.Pincode); // 851101

// 🔹 Parameter vs Argument (Very Important ⭐)
// function StudentDetails(s) // s = parameter

// StudentDetails(student); // student = argument


// 📌 Interview line:
// Parameter function ke definition me hota hai,
// Argument function call ke time pass hota hai.

// 🔹 Object ko function me kyu pass karte hain?

// ✔ Code reuse ke liye
// ✔ Data ko organized rakhne ke liye
// ✔ Real-world entities (student, user, product) handle karne ke liye
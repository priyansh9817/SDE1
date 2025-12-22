{
  let x = 5;
  // console.log(x);    barcket ke andar likhe ge tab ye error show nhi kare gaa 
}
//  console.log(x);    yaha error show kare gaa undfined dega 


function test() {
  var z = 30;
}
console.log(z);

{
  var p = 50;
}
console.log(p); // ✅ var block follow nahi karta


// it give the reference error due to let's behaviour which is block scoped { } here console.log is outside of blocks 
function calculate(a, b, callback) {
  let result = a + b;
  callback(result);
}

calculate(5, 10, (res) => {
  console.log("Result:", res);
});

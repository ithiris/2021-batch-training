console.clear();
function success(val) {
  console.log("operations success");
  console.log("return value", val);
}
function error() {
  console.log("operations failure");
}
const options = {
  success: success,
  error: error,
};
function operation(options) {
  console.log("operations happening");
  options.success("112");
  options.error();
}
operation(options);

const myMath = {
  double(num) {
    return num * 2;
  },
  isEven(num) {
    return num % 2 == 0;
  },
};
const doubled = [1, 3, 5].map(myMath.double);
const even = [1, 4, 5].filter(myMath.isEven);

console.log(doubled);



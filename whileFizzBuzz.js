var output = [];
var i = 1;

function fizzBuzz() {
  while (i <= 100) {

    if (i % 3 === 0 && i % 5 === 0) {
      output.push("fizzBuzz");
    } else if (i % 3 === 0) {
      output.push("fizz");
    } else if (i % 5 === 0) {
      output.push("buzz");
    } else {
      output.push(i);
    }
    i++;
  }
  console.log(output);
}
fizzBuzz();

//Classic fizzbuzz challenge solved with a while loop

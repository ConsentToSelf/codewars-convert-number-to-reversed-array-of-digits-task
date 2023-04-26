/*
Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]
*/
const digitize = (n) => {
  let str = String(n);
  str = str.split("");
  str = str.reverse();
  str = str.map((element) => {
    return +element;
  });
  return str;
};
console.log(digitize(35231));

const args = [];
function call(...theArgs) {
  args.push(Array.from(theArgs));
}

call(1, 2, 3);
call("A", "B");

console.log(args[0]); // [1, 2, 3]
console.log(args[1]); // ["A", "B"]

let symname1 = Symbol("dog");
let symname2 = Symbol("dog");
let obj = {};
obj[symname1] = "golden retriever"; // golden retriever
obj[symname2] = "labrador retriever"; // labrador retriever
console.log(obj[symname1]);
console.log(obj[symname2]);

let symname3 = Symbol.for("dog");
let symname4 = Symbol.for("dog");
let obj2 = {};
obj2[symname3] = "golden retriever";
obj2[symname4] = "labrador retriever"; // for は共有できるから、ここで上書きされた
console.log(obj2[symname3]); // labrador retriever
console.log(obj2[symname4]); // labrador retriever 
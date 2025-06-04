const input = "Hello\nWorld";
const expected = "Hello\r\nWorld";
const output = expected.replace("\n", "\r\n");
console.log(input);
console.log(expected);
console.log(output == "Hello\r\r\nWorld"); // Should print: Hello\r\nWorld
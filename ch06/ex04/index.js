let obj = {};

Object.defineProperty(obj, "property1", {
  value: 42,
  writable: false,
  enumerable: false,
  configurable: false
});

//obj.property1 = 43;
console.log(obj.property1); // TypeError: Cannot assign to read only property 'property1' of object '#<Object>'

//delete obj.property1;
console.log(obj.property1); // TypeError: Cannot delete property 'property1' of #<Object>

console.log(obj.hasOwnProperty("property1")); //true

console.log(obj.propertyIsEnumerable("property1")); //false

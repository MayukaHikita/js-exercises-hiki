import { filterEvenNumber } from "./index.js";

describe("filterEvenNumber", () => {
  it("shold return only even number", () => {
    const input = { x: 1, y: 2, z: 3};
    const expectedOutput = { y: 2};
    expect(filterEvenNumber(input)).toEqual(expectedOutput);
    expect(input).toEqual({ x: 1, y: 2, z: 3 });
  });

  it("should handle an empty object", () => {
    const input = {};
    const expectedOutput = {};
    expect(filterEvenNumber(input)).toEqual(expectedOutput);
  });
});
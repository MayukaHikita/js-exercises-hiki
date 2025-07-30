import { DynamicSizeArray } from "./index.js";

describe("DynamicSizeArray", () => {
  let array;

  beforeEach(() => {
    array = new DynamicSizeArray();
  });

  it("should initialize with length 0", () => {
    expect(array.length()).toBe(0);
  });

  it("should allow setting and getting values", () => {
    array.set(0, "a");
    expect(array.get(0)).toBe("a");
    expect(array.length()).toBe(1);
  });

  it("should return undefined for out-of-bounds get", () => {
    expect(array.get(10)).toBeUndefined();
  });

  it("should store value as property for negative index", () => {
    array.set(-1, "b");
    expect(array["-1"]).toBe("b");
  });

  it("should expand size when pushing elements beyond initial size", () => {
    for (let i = 0; i < 10; i++) {
      array.push(i);
    }
    expect(array.length()).toBe(10);
    for (let i = 0; i < 10; i++) {
      expect(array.get(i)).toBe(i);
    }
  });
});
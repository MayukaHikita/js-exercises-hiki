import { getPropertyNames } from "./index.js";

describe ("getPropertyNames", () => {
  it("独自プロパティ、列挙可能な継承プロパティを返却", () => {
    const obj = Object.create({ inheritedProp: "inherited" });
    obj.ownProp = "own";
    expect(getPropertyNames(obj)).toEqual(["ownProp", "inheritedProp"]);
  });

  it("列挙不可なプロパティ", () => {
    const obj = Object.create({ inheritedProp: "inherited" });
    Object.defineProperty(obj, "nonEnumerableProp", { value: "non-enumerable", enumerable: false });
    expect(getPropertyNames(obj)).toEqual(["nonEnumerableProp", "inheritedProp"]);
  });

  it("シンボルプロパティ", () => {
    const sym = Symbol("symbol");
    const obj = { [sym]: "symbol value" };
    expect(getPropertyNames(obj)).toEqual([sym]);
  });

  it("空のオブジェクト", () => {
    expect(getPropertyNames({})).toEqual([]);
  });
});
import { TypedMap } from "./index.js";

describe("TypedMap", () => {
  test("正しい型のentriesで初期化できる", () => {
    const tm = new TypedMap("string", "number", [["a", 1], ["b", 2]]);
    expect(tm.get("a")).toBe(1);
    expect(tm.get("b")).toBe(2);
    expect(tm.size).toBe(2);
  });

  test("間違った型のentriesを渡すとエラーになる", () => {
    expect(() => {
      new TypedMap("string", "number", [["a", "not number"]]);
    }).toThrow(TypeError);
  });

  test("setで正しい型を追加できる", () => {
    const tm = new TypedMap("string", "number");
    tm.set("x", 10);
    expect(tm.get("x")).toBe(10);
  });

  test("setでkeyの型が違うとエラーになる", () => {
    const tm = new TypedMap("string", "number");
    expect(() => tm.set(123, 10)).toThrow(TypeError);
  });

  test("setでvalueの型が違うとエラーになる", () => {
    const tm = new TypedMap("string", "number");
    expect(() => tm.set("x", "not number")).toThrow(TypeError);
  });

  test("委譲されたメソッドの動作確認: delete と has", () => {
    const tm = new TypedMap("string", "number");
    tm.set("key1", 100);
    expect(tm.has("key1")).toBe(true);
    tm.delete("key1");
    expect(tm.has("key1")).toBe(false);
  });

  test("clear で全削除できる", () => {
    const tm = new TypedMap("string", "number", [["a", 1], ["b", 2]]);
    tm.clear();
    expect(tm.size).toBe(0);
  });

  test("イテレーションできる", () => {
    const tm = new TypedMap("string", "number", [["a", 1], ["b", 2]]);
    const result = [...tm];
    expect(result).toEqual([["a", 1], ["b", 2]]);
  });
});
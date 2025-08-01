import { DynamicSizeArray } from "./index.js";

describe("DynamicSizeArray", () => {
  let array;

  beforeEach(() => {
    array = new DynamicSizeArray();
  });

  it("should initialize with length 0", () => {
    expect(array.length()).toBe(0);
  });// 初期化されたときの長さは0であることを確認

  it("should allow setting and getting values", () => {
    array.set(0, "a");
    expect(array.get(0)).toBe("a");
    expect(array.length()).toBe(1);
  });// 値を設定して取得できることを確認

  it("should return undefined for out-of-bounds get", () => {
    expect(array.get(10)).toBeUndefined();
  });// 範囲外のインデックスで値を取得しようとした場合、undefinedが返されることを確認

  it("should store value as property for negative index", () => {
    array.set(-1, "b");
    expect(array["-1"]).toBe("b");
  });// 負のインデックスで値を設定した場合、プロパティとして保存されることを確認

  it("should expand size when pushing elements beyond initial size", () => {
    for (let i = 0; i < 10; i++) {
      array.push(i);
    }
    expect(array.length()).toBe(10);
    for (let i = 0; i < 10; i++) {
      expect(array.get(i)).toBe(i);// 追加した要素が正しく取得できることを確認
    }
  });// 初期サイズを超える要素を追加したときに、配列のサイズが拡張されることを確認
});
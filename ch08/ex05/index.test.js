import { sequenceToObject } from "./index.js";

describe("sequenceToObject", () => {
    it("正しい引数が与えられた場合", () => {
        const result = sequenceToObject("a", 1, "b", 2, "c", 3);
        expect(result).toEqual({ a: 1, b: 2, c: 3 });
    });

    it("引数の数が奇数", () => {
        expect(() => sequenceToObject("a", 1, "b")).toThrow('引数の数が偶数でない');
    });

    it("奇数番目の値が文字列", () => {
        expect(() => sequenceToObject(1, 2, "b", 3)).toThrow('引数の奇数番目の値が文字列でない');
    });

    it("スプレッド演算子で配列を渡す", () => {
        const arr = ["x", 10, "y", 20];
        const result = sequenceToObject(...arr);
        expect(result).toEqual({ x: 10, y: 20 });
    });
});
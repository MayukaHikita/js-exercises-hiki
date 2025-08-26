import { arrayC, squareX, now } from "./index.js";

describe("アロー関数", () => {
    test("arrayCが期待通りの動作をすること", () => {
        const n = 5;
        const c = "test1";
        const expected = ["test1", "test1", "test1", "test1", "test1"];
        expect(arrayC(n, c)).toEqual(expected);
    });
    test("squareXが期待通りの動作をすること", () => {
        const x = 4;
        const expected = 16;
        expect(squareX(x)).toBe(expected);
    });
    test("nowが期待通りの動作をすること", () => {
        const currentDate = new Date();
        const nowDate = now();
        expect(nowDate.getFullYear()).toBe(currentDate.getFullYear());
        expect(nowDate.getMonth()).toBe(currentDate.getMonth());
        expect(nowDate.getDate()).toBe(currentDate.getDate());
        expect(nowDate.getHours()).toBe(currentDate.getHours());
        expect(nowDate.getMinutes()).toBe(currentDate.getMinutes());
        expect(nowDate.getSeconds()).toBe(currentDate.getSeconds());
    });
});
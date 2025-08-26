import { power, powerLoop } from "./index.js";

describe("べき乗を計算する関数", () => {
    test("べき乗を計算する関数(再帰)", () => {
        expect(power(2, 3)).toBe(8);
        expect(power(2, 4)).toBe(16);
        expect(power(3, 3)).toBe(27);
    });
    test("べき乗を計算する関数(ループ)", () => {
        expect(powerLoop(2, 3)).toBe(8);
        expect(powerLoop(2, 4)).toBe(16);
        expect(powerLoop(3, 3)).toBe(27);
    });
});
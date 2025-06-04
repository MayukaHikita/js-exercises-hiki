import { lf2crlf } from "./index.js";
import { crlf2lf } from "./index.js";

describe("lf2crlf", () => {
    it("should convert LF to CRLF", () => {
        const input = "Hello\nWorld";
        const expected = "Hello\r\nWorld";
        expect(lf2crlf(input)).toBe(expected);
    });

    it("should not change CRLF", () => {
        const input = "Hello\r\nWorld";
        const expected = "Hello\r\nWorld";
        expect(lf2crlf(input)).toBe(expected);
    });

    it("should handle empty strings", () => {
        const input = "";
        const expected = "";
        expect(lf2crlf(input)).toBe(expected);
    });
});

describe("crlf2lf", () => {
    it("should convert CRLF to LF", () => {
        const input = "Hello\r\nWorld";
        const expected = "Hello\nWorld";
        expect(crlf2lf(input)).toBe(expected);
    });

    it("should not change LF", () => {
        const input = "Hello\nWorld";
        const expected = "Hello\nWorld";
        expect(crlf2lf(input)).toBe(expected);
    });

    it("should handle empty strings", () => {
        const input = "";
        const expected = "";
        expect(crlf2lf(input)).toBe(expected);
    });
});
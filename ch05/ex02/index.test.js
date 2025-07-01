import {escapeStringIfElse} from './index.js';
import {escapeStringSwitch} from './index.js';

describe('文字列のエスケープif-else', () => {
    test('エスケープ文字を含む文字列', () => {
        const input = "\b\v\r\"\'\\Hello\nWorld\t!\0";
        const expected = "\\b\\v\\r\\\"\\'\\\\Hello\\nWorld\\t!\\0";
        expect(escapeStringIfElse(input)).toBe(expected);
    });

    test('空文字列', () => {
        expect(escapeStringIfElse("")).toBe("");
    });

    test('エスケープ文字なしの文字列', () => {
        expect(escapeStringIfElse("Hello World!")).toBe("Hello World!");
    });
});

describe('文字列のエスケープswitch', () => {
    test('エスケープ文字を含む文字列', () => {
        const input = "\b\v\r\"\'\\Hello\nWorld\t!\0";
        const expected = "\\b\\v\\r\\\"\\'\\\\Hello\\nWorld\\t!\\0";
        expect(escapeStringSwitch(input)).toBe(expected);
    });

    test('空文字列', () => {
        expect(escapeStringSwitch("")).toBe("");
    });

    test('エスケープ文字なしの文字列', () => {
        expect(escapeStringSwitch("Hello World!")).toBe("Hello World!");
    });
});
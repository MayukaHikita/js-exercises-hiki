import {add} from './index.js';
import {sub} from './index.js';
import {mul} from './index.js';
import {div} from './index.js';

describe('複素数四則演算', () => {
    const a = { real: 1, imag: 2 };
    const b = { real: 3, imag: 4 };

    test('Addition', () => {
        expect(add(a, b)).toEqual({ real: 4, imag: 6 });
    });

    test('Subtraction', () => {
        expect(sub(a, b)).toEqual({ real: -2, imag: -2 });
    });

    test('Multiplication', () => {
        expect(mul(a, b)).toEqual({ real: -5, imag: 10 });
    });

    test('Division', () => {
        expect(div(a, b)).toEqual({ real: 11/25, imag: 2/25 });
    });
});

describe('複素数四則演算_負数あり', () => {
    const a = { real: 1, imag: 2 };
    const b = { real: 3, imag: -4 };

    test('Addition', () => {
        expect(add(a, b)).toEqual({ real: 4, imag: -2 });
    });

    test('Subtraction', () => {
        expect(sub(a, b)).toEqual({ real: -2, imag: 6 });
    });

    test('Multiplication', () => {
        expect(mul(a, b)).toEqual({ real: 11, imag: 2 });
    });

    test('Division', () => {
        expect(div(a, b)).toEqual({ real: -1/5, imag: 2/5 });
    });
});

describe('複素数四則演算_二つの引数ともに負数', () => {
    const a = { real: -1, imag: -2 };
    const b = { real: -3, imag: -4 };

    test('Addition', () => {
        expect(add(a, b)).toEqual({ real: -4, imag: -6 });
    });

    test('Subtraction', () => {
        expect(sub(a, b)).toEqual({ real: 2, imag: 2 });
    });

    test('Multiplication', () => {
        expect(mul(a, b)).toEqual({ real: -5, imag: 10 });
    });

    test('Division', () => {
        expect(div(a, b)).toEqual({ real: 11/25, imag: 2/25 });
    });
});
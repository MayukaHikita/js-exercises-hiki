// 実部と虚部をプロパティとして持つ 2 つの複素数オブジェクトを引数として四則演算の結果を返す関数 add、sub、mul、div を実装
// 1+2i + 3+4i = 4+6i
// 1+2i - 3+4i = -2-2i
// 1+2i * 3+4i = -5+10i
// 1+2i / 3+4i = 11/25 + 2/25i

// const a = { real: 1, imag: 2 };
// const b = { real: 3, imag: 4 };

export function add (a, b) {
    return {
        real: a.real + b.real,
        imag: a.imag + b.imag
    };
}

export function sub (a, b) {
    return {
        real: a.real - b.real,
        imag: a.imag - b.imag
    };
}

export function mul (a, b) {
    return {
        real: a.real * b.real - a.imag * b.imag,
        imag: a.real * b.imag + a.imag * b.real
    };
}

export function div (a,b) {
    return {
        real: (a.real * b.real + a.imag * b.imag) / (b.real * b.real + b.imag * b.imag),
        imag: (a.imag * b.real - a.real * b.imag) / (b.real * b.real + b.imag * b.imag)
    }
}
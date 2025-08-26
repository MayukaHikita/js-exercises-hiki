export function sequenceToObject(...values) {
    if (values.length %2 !== 0) {
        throw new Error('引数の数が偶数でない');
    }
    for (let i = 0; i < values.length; i += 2) {
        if (typeof values[i] !== 'string') {
            throw new Error('引数の奇数番目の値が文字列でない');
        }
    }
    let obj = {};
    for (let i = 0; i < values.length; i += 2) {
        obj[values[i]] = values[i+1];
    }
    return obj;
}
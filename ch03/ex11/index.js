//引数で与えられた2つのオブジェクト o1 と o2 を比較する関数
export function equals (o1, o2) {
    //o1 と o2 が 厳密に等価 である場合 true を返す。
    if (o1 === o2) {
        return true;
    }
    //o1 または o2 に null またはオブジェクト以外が指定された場合 false を返す (tyepof の返り値が object かどうかを確認する)。
    if (o1 === null || o2 === null || typeof o1 !== 'object' || typeof o2 !== 'object') {
        return false;
    }
    //o1 と o2 のプロパティの数・名前が一致しない場合は false を返す
    if( Object.keys(o1).length !== Object.keys(o2).length) {
        return false;
    }
    if(Object.keys(o1) !== Object.keys(o2)) {
        return false;
    }
    //o1 と o2 のプロパティの各値を equals で比較し、全て true ならば true を返し、1つでも false があれば false を返す
    for(let key in o1) {
        if (!equals(o1[key], o2[key])) {
            return false;
        }
    }
    return true;
}

console.log(equals(42, 42)); //true
console.log(equals(null, null)); //true
console.log(equals({x: 42}, 42)); //false
console.log(equals(null, {x: 42})); //false
console.log(equals({x: 1}, {y: 1})); // false
console.log(equals({x: 1}, {x: 1, y: 1})); // false
console.log(equals({x: {y: {z: 10}}}, {x: {y: {z: 10}}})); // ★trueを返すはずだがfalseを返す。。
console.log(equals({x: {y: {z: 10}}}, {x: {y: {z: 10, w: 1}}})); // false
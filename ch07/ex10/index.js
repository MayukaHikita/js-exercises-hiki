function makeFixedSizeArray(size) {
  const array = new Array(size);
  return {
    get(index) {
      if (index < 0 || array.length <= index) {
        throw new Error(`Array index out of range: ${index}`);
      }
      return array[index];
    },
    set(index, value) {
      if (index < 0 || array.length <= index) {
        throw new Error(`Array index out of range: ${index}`);
      }
      array[index] = value;
    },
    length() {
      return array.length;
    },
  };
}

export class DynamicSizeArray {
  static INITIAL_SIZE = 4; // 初期サイズ

  constructor() {
    this.len = 0;
    this.array = makeFixedSizeArray(DynamicSizeArray.INITIAL_SIZE);
  }

  get(index) {
    if (index < 0 || index >= this.len) {//値が無いはずの要素が指定された時
      return undefined;
    }
    return this.array[index];
  }

  set(index, value) {
    if (index < 0) {
      // 負のインデックスはプロパティとして保存
      this[index] = value;
      return;
    }

    if (index >= this.array.length) {//指定されたインデックスが現在の配列の長さを超える場合.
      this._resize(index + 1);//配列の長さ的にはindex+1になる必要がある
    }
    this.array[index] = value;
    // len を更新しないといけないと考えて以下を書いたが、今見たら間違っている？
    // 更新されたインデックスが現在のlenより大きい場合、更新
    if (index >= this.len) {
      this.len = index + 1;
    }
  }

  length() {
    return this.len;
  }

  //  push の中では固定長の配列に要素を追加する空きが無い場合、倍サイズの固定長配列を作成
  push(value) {
    // 問題文の内容
    if (this.len >= this.array.length) {
      this._resize(this.array.length * 2);
    }
    this.array[this.len] = value;
    this.len++;
  }

  _resize(newSize) {
    const newArray = new Array(newSize);
    for (let i = 0; i < this.len; i++) {
      newArray[i] = this.array[i];
    }
    this.array = newArray;
  }
}

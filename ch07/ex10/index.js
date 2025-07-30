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
    if (index < 0 || index >= this.len) {
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

    if (index >= this.array.length) {
      this._resize(index + 1);
    }
    this.array[index] = value;
    // 更新されたインデックスが現在の長さより大きい場合、長さを更新
    if (index >= this.len) {
      this.len = index + 1;
    }
  }

  length() {
    return this.len;
  }

  push(value) {
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

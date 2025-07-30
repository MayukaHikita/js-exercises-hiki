test("obj が正しいか", () => {
const mock = jest.fn(); //メモ　jest.fn() は、Jestが提供する モック関数を作成するためのユーティリティ

const obj = {
  x: 0,
  y: 0,
  sum() {
    mock();
    return this.x + this.y;
  },
};

// ここに１行のコードを書く

obj.x = 1;
obj.y = 2;
obj.sum = obj.sum(); //ここ？
expect(JSON.stringify(obj)).toBe(`{"x":1,"y":2,"sum":3}`);
expect(mock).toHaveBeenCalled();

});

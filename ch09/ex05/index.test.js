import { instanceOf } from "./index.js";

class Animal {}
class Dog extends Animal {}
class Cat extends Animal {}
class Bulldog extends Dog {}

describe("instanceOf 関数のテスト", () => {
  test("直接のインスタンス", () => {
    const dog = new Dog();
    expect(instanceOf(dog, Dog)).toBe(true);
  });

  test("多段継承: Bulldog → Dog → Animal", () => {
    const bulldog = new Bulldog();
    expect(instanceOf(bulldog, Bulldog)).toBe(true); // 自クラス
    expect(instanceOf(bulldog, Dog)).toBe(true);      // 親クラス
    expect(instanceOf(bulldog, Animal)).toBe(true);   // さらに上位クラス
  });

  test("継承関係にないクラス", () => {
    const cat = new Cat();
    expect(instanceOf(cat, Dog)).toBe(false);
  });

  test("組み込み型: Array", () => {
    const arr = [];
    expect(instanceOf(arr, Array)).toBe(true);
    expect(instanceOf(arr, Object)).toBe(true);
    expect(instanceOf(arr, Function)).toBe(false);
  });

  test("null や プリミティブ型", () => {
    expect(instanceOf(null, Object)).toBe(false);
    expect(instanceOf(42, Number)).toBe(false);
    expect(instanceOf("hello", String)).toBe(false);
    expect(instanceOf(true, Boolean)).toBe(false);
  });
});
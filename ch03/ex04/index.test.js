// 与えられた文字名に対してlengthの値を確認するテストコード
describe ("string length", () => {
  it("returns correct length for various strings", () => {
    expect("💯".length).toBe(2);
    expect("\uD83D\uDCAF".length).toBe(2);
    expect("\u{0001F4AF}".length).toBe(2);
  });
});
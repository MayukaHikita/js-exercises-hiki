test("object compare", () => {
    const obj1 = {x: 1};
    // 問題: ここに1行コードを書くことで以下の行で {x: 1, y: 2} が出力されること
    obj1.y = 2;
    console.log(obj1);

    const obj2 = {x: 1, y: 2};
    // 問題: 以下の行では何が出力されるか、予想してから結果を確認しなさい
    console.log(obj1 === obj2);
    // 予想: false  // 結果: false
});
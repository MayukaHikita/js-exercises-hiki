let obj = {
    "1": "数値のプロパティ",
    "strProp": "文字列のプロパティ",
    x: "列挙可能なプロパティ"
  };
  const newObject = Object.create(obj); // objをプロトタイプに持つ新しいオブジェクトを作成
  newObject["1"] = "数値かつ同名プロパティ";
  newObject["2"] = "数値かつプロトタイプの数値プロパティと異なるプロパティ";
  newObject["strProp"] = "文字列かつ同名プロパティ";
  newObject["newStrProp"] = "文字列かつ異なるプロパティ";
  // 列挙不可のプロパティ(9章)
  Object.defineProperty(newObject, "x", {
    value: "列挙不可なプロパティ",
    enumerable: false
  });
  // for/in ループでプロパティを列挙
  for (const key in newObject) {
    console.log(key);
  }

  //1
  //2
  //strProp
  //newStrProp

  // 一応中身確認
  console.log(newObject);
  //   {
  //     '1': '数値かつ同名プロパティ',
  //     '2': '数値かつプロトタイプの数値プロパティと異なるプロパティ',
  //     strProp: '文字列かつ同名プロパティ',
  //     newStrProp: '文字列かつ異なるプロパティ'
  //   }

  // 一応列挙不可のプロパティ確認（出力できた）
  console.log(newObject.x);
  // 列挙不可なプロパティ


///////////////////////////////////////
          //わからず断念//
//////////////////////////////////////


function newHashTable(capacity) {
    return {
      size: 0, // マッピング数を示すプロパティ
      entries: new Array(capacity), // マッピングを格納する固定長の配列
      get(key) {
        // keyにマップされた値を取得する
        return this.entries[key];
      },
      put(key, value) {
        // key, valueのマッピングを追加する(keyが存在する場合はvalueを上書きする)
            this.entries[key] = value; // 既存の値を上書き
      },
      remove(key) {
        // keyのマッピングを削除する
        if (this.entries[key] !== undefined) {
          delete this.entries[key]; // マッピングを削除
        }
      },
    };
  }
  
  function sample() {
    const hashTable = newHashTable(10);
    hashTable.put("key1", "value1");
    hashTable.put("key2", { value: "value2" });
  
    console.log(`size=${hashTable.size}`); // => size=2
    console.log(`key1=${hashTable.get("key1")}`); // => key1=value1
    console.log(`key2=${JSON.stringify(hashTable.get("key2"))}`); // => key2={"value":"value2"}
  
    hashTable.put("key2", "new value");
  
    console.log(`key2=${hashTable.get("key2")}`); // => key2=new value
  
    hashTable.remove("key2");
  
    console.log(`key2=${hashTable.get("key2")}`); // => key2=undefined
    console.log(`size=${hashTable.size}`); // => size=1
  }
  
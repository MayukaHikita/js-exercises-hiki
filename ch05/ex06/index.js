function checkExecutionOrder() {
    try {
      console.log("tryブロック: 開始");
      throw new Error("エラーが発生しました！");
      console.log("tryブロック: 終了"); // ここには到達しない
    } catch (error) {
      console.log("catchブロック: 開始");
      console.log(`catchブロック: 終了`);
    } finally {
      console.log("finallyブロック: 開始");
      console.log("finallyブロック: 終了");
    }
  }
// 原則を満たさないコード
class Report {
  constructor(data) {
    this.data = data;
  }
  saveToFile() {
    // ファイル保存の処理
  }
  printToConsole() {
    console.log(this.data);
  }
}

// 原則を満たすコード
class Report {
  constructor(data) {
    this.data = data;
  }
}
class ReportSaver {
  save(report) {
    // 保存処理
  }
}
class ReportPrinter {
  print(report) {
    console.log(report.data);
  }
}

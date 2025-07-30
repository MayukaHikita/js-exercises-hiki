export function add(matrixA, matrixB) {
  // 行列のサイズが一致しているか確認
  if (
    matrixA.length !== matrixB.length ||
    matrixA[0].length !== matrixB[0].length
  ) {
    throw new Error("行列のサイズが一致しない");
  }
  let result = [];
  for (let i = 0; i < matrixA.length; i++) {
    let row = [];
    for (let j = 0; j < matrixA[0].length; j++) {
      row.push(matrixA[i][j] + matrixB[i][j]);
    }
    result.push(row);
  }
  return result;
}

export function multiply(matrixA, matrixB) {
    let rowsA = matrixA.length;
    let colsA = matrixA[0].length;
    let rowsB = matrixB.length;
    let colsB = matrixB[0].length;
  
    // 行列のサイズが乗算可能か確認
    if (colsA !== rowsB) {
      throw new Error("行列のサイズが乗算不可");
    }
  
    let result = [];
    for (let i = 0; i < rowsA; i++) {
      let row = [];
      for (let j = 0; j < colsB; j++) {
        let sum = 0;
        for (let k = 0; k < colsA; k++) {
          sum += matrixA[i][k] * matrixB[k][j];
        }
        row.push(sum);
      }
      result.push(row);
    }
  
    return result;
  }
  

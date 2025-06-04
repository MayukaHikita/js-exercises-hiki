// フィボナッチ数を計算する関数
export function fibo(n){
  if(n === 0){
    return 0;
  }else if(n === 1){
    return 1;
  }else{
    let a = 0;
    let b = 0;
    let t = 1;
    for(let i=0; i<n-1; i++){
      a = b;
      b = t;
      t = a + b;
    }
    return t;
  }
}
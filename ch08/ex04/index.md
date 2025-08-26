## 8.4
予想  
nest.nm(); は入れ子型の関数がメソッドとして呼び出されたので、関数を呼び出したオブジェクトつまりnestがthisの値になるので、false, trueが出力される？  
nest.arrow(); は入れ子型の関数（アロー関数）が関数として呼び出されているので、その場合は外側のthisを継承することになるので、true, false になる？  

結果（上記の予想のまま）  
false true  
true false
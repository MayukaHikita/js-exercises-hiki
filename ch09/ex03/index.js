export function PositiveNumber(x) {
    if (x <= 0) {
      throw new Error("require : x > 0");
    }
  
    // x はクロージャ内のプライベート変数になる
    let value = x;
  
    return {
      getX() {
        return value;
      },
      setX(newValue) {
        if (newValue <= 0) {
          throw new Error("require : x > 0");
        }
        value = newValue;
      }
    };
  }
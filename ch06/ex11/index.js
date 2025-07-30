
export class PolarPoint {
    constructor(r = 0, theta = 0) {
      this._r = r;
      this._theta = theta;
    }
  
    get r() {
      return this._r;
    }
  
    set r(value) {
      this._r = value;
    }
  
    get theta() {
      return this._theta;
    }
  
    set theta(value) {
      this._theta = value;
    }
  
    get x() {
      return this._r * Math.cos(this._theta);
    }
  
    set x(value) {
      if (isNaN(value)) {
        throw new Error("x に NaN は設定できません");
      }
      const y = this.y;
      this._r = Math.sqrt(value ** 2 + y ** 2);
      this._theta = Math.atan2(y, value);
    }
  
    get y() {
      return this._r * Math.sin(this._theta);
    }
  
    set y(value) {
      if (isNaN(value)) {
        throw new Error("y に NaN は設定できません");
      }
      const x = this.x;
      this._r = Math.sqrt(x ** 2 + value ** 2);
      this._theta = Math.atan2(value, x);
    }
  }
  
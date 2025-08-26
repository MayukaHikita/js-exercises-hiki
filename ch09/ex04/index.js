// ========== class記法 ==========

// 戦士クラス
export class Warrior {
    constructor(atk) {
      this.atk = atk;
    }
  
    attack() {
      return this.atk * 2;
    }
  }
  
  // 魔法戦士クラス（戦士を継承）
  export class MagicWarrior extends Warrior {
    constructor(atk, mgc) {
      super(atk);
      this.mgc = mgc;
    }
  
    attack() {
      return super.attack() + this.mgc;
    }
  }
  
  
  // ========== prototype記法 ==========
  
  // 戦士 (prototype)
  export function WarriorProto(atk) {
    this.atk = atk;
  }
  
  WarriorProto.prototype.attack = function () {
    return this.atk * 2;
  };
  
  // 魔法戦士 (prototype)
  export function MagicWarriorProto(atk, mgc) {
    WarriorProto.call(this, atk);
    this.mgc = mgc;
  }
  
  MagicWarriorProto.prototype = Object.create(WarriorProto.prototype);
  MagicWarriorProto.prototype.constructor = MagicWarriorProto;
  
  MagicWarriorProto.prototype.attack = function () {
    return WarriorProto.prototype.attack.call(this) + this.mgc;
  };
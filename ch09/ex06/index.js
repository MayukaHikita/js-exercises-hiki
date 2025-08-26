export class TypedMap {
    constructor(keyType, valueType, entries) {
      this.keyType = keyType;
      this.valueType = valueType;
      this._map = new Map();
  
      if (entries) {
        for (let [k, v] of entries) {
          if (typeof k !== keyType || typeof v !== valueType) {
            throw new TypeError(`Wrong type for entry [${k}, ${v}]`);
          }
          this._map.set(k, v);
        }
      }
    }
  
    set(key, value) {
      if (this.keyType && typeof key !== this.keyType) {
        throw new TypeError(`${key} is not of type ${this.keyType}`);
      }
      if (this.valueType && typeof value !== this.valueType) {
        throw new TypeError(`${value} is not of type ${this.valueType}`);
      }
      this._map.set(key, value);
      return this;
    }
  
    // Map の機能を委譲
    get(key) {
      return this._map.get(key);
    }
  
    has(key) {
      return this._map.has(key);
    }
  
    delete(key) {
      return this._map.delete(key);
    }
  
    clear() {
      return this._map.clear();
    }
  
    get size() {
      return this._map.size;
    }
  
    entries() {
      return this._map.entries();
    }
  
    keys() {
      return this._map.keys();
    }
  
    values() {
      return this._map.values();
    }
  
    [Symbol.iterator]() {
      return this._map[Symbol.iterator]();
    }
  }
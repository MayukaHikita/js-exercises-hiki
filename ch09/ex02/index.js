export class C {
    #count = 0; // プライベートフィールド（JS/TS両方でOK）
    get x() {
      return this.#count++;
    }
  }
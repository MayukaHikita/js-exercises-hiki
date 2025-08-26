import { Warrior, MagicWarrior, WarriorProto, MagicWarriorProto } from "./index.js";

describe("class 記法のテスト", () => {
    test("Warrior の attack は atk * 2", () => {
      const w = new Warrior(10);
      expect(w.attack()).toBe(20);
    });
  
    test("MagicWarrior の attack は atk*2 + mgc", () => {
      const mw = new MagicWarrior(10, 5);
      expect(mw.attack()).toBe(25);
    });
  });
  
  describe("prototype 記法のテスト", () => {
    test("WarriorProto の attack は atk * 2", () => {
      const w = new WarriorProto(7);
      expect(w.attack()).toBe(14);
    });
  
    test("MagicWarriorProto の attack は atk*2 + mgc", () => {
      const mw = new MagicWarriorProto(7, 3);
      expect(mw.attack()).toBe(17);
    });
  });
import { is31DaysIfElse } from "./index.js";
import { is31DaysSwitch } from "./index.js";

describe("is31DaysIfElse", () => {
  it("returns true for January", () => {
    expect(is31DaysIfElse("Jan")).toBe(true);
  });

  it("returns false for February", () => {
    expect(is31DaysIfElse("Feb")).toBe(false);
  });

  it("returns true for March", () => {
    expect(is31DaysIfElse("Mar")).toBe(true);
  });

  it("returns false for April", () => {
    expect(is31DaysIfElse("Apr")).toBe(false);
  });

  it("returns true for May", () => {
    expect(is31DaysIfElse("May")).toBe(true);
  });

  it("returns false for June", () => {
    expect(is31DaysIfElse("Jun")).toBe(false);
  });

  it("returns true for July", () => {
    expect(is31DaysIfElse("Jul")).toBe(true);
  });

  it("returns true for August", () => {
    expect(is31DaysIfElse("Aug")).toBe(true);
  });

  it("returns false for September", () => {
    expect(is31DaysIfElse("Sep")).toBe(false);
  });

  it("returns true for October", () => {
    expect(is31DaysIfElse("Oct")).toBe(true);
  });

  it("returns true for December", () => {
    expect(is31DaysIfElse("Dec")).toBe(true);
  });
});

describe("is31DaysSwitch", () => {
  it("returns true for January", () => {
    expect(is31DaysSwitch("Jan")).toBe(true);
  });

  it("returns false for February", () => {
    expect(is31DaysSwitch("Feb")).toBe(false);
  });

  it("returns true for March", () => {
    expect(is31DaysSwitch("Mar")).toBe(true);
  });

  it("returns false for April", () => {
    expect(is31DaysSwitch("Apr")).toBe(false);
  });

  it("returns true for May", () => {
    expect(is31DaysSwitch("May")).toBe(true);
  });

  it("returns false for June", () => {
    expect(is31DaysSwitch("Jun")).toBe(false);
  });

  it("returns true for July", () => {
    expect(is31DaysSwitch("Jul")).toBe(true);
  });

  it("returns true for August", () => {
    expect(is31DaysSwitch("Aug")).toBe(true);
  });

  it("returns false for September", () => {
    expect(is31DaysSwitch("Sep")).toBe(false);
  });

  it("returns true for October", () => {
    expect(is31DaysSwitch("Oct")).toBe(true);
  });

  it("returns true for December", () => {
    expect(is31DaysSwitch("Dec")).toBe(true);
  });
});
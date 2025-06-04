import { equalArrays } from "./index.js";

test("ch03-ex07", () => {
  const x = ["a", "b"];
  const y = { length: 2, 0: "a", 1: "b" };

  expect(equalArrays(x, y)).toBe(true);
  expect(x).not.toEqual(y);
});


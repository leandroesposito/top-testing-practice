import reverseString from "./reverseString.js";

test("reverseString returns something", () => {
  expect(reverseString).toBeDefined();
});

test("reverseString return reversed string", () => {
  expect(reverseString("")).toBe("");
  expect(reverseString("a")).toBe("a");
  expect(reverseString("aa")).toBe("aa");
  expect(reverseString("ab")).toBe("ba");
});

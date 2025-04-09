import caesarCipher from "./caesarCipher.js";

test("caesarCipher exists", () => {
  expect(caesarCipher).toBeDefined();
});

test("caesarCipher returns something", () => {
  expect(caesarCipher("")).toBeDefined();
});

test("caesarCipher returns cipher string", () => {
  const tests = [
    {
      value: "",
      shift: 0,
      result: "",
    },
    {
      value: "a",
      shift: 0,
      result: "a",
    },
    {
      value: "a",
      shift: 1,
      result: "b",
    },
    {
      value: "a",
      shift: 2,
      result: "c",
    },
    {
      value: "A",
      shift: 2,
      result: "C",
    },
    {
      value: "aa",
      shift: 2,
      result: "cc",
    },
    {
      value: "Ab",
      shift: 2,
      result: "Cd",
    },
  ];

  tests.forEach((test) => {
    expect(caesarCipher(test.value, test.shift)).toBe(test.result);
  });
});

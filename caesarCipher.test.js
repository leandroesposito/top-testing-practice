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
    {
      value: "AbC",
      shift: 2,
      result: "CdE",
    },
    {
      value: "AbC!",
      shift: 2,
      result: "CdE!",
    },
    {
      value: "1AbC!",
      shift: 2,
      result: "1CdE!",
    },
    {
      value: "1AbC!",
      shift: 26,
      result: "1AbC!",
    },
    {
      value: "123",
      shift: 1,
      result: "123",
    },
    {
      value: "XyZ",
      shift: 1,
      result: "YzA",
    },
  ];

  tests.forEach((test) => {
    expect(caesarCipher(test.value, test.shift)).toBe(test.result);
  });
});

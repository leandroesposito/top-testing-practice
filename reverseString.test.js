import reverseString from "./reverseString.js";

test("reverseString returns something", () => {
  expect(reverseString).toBeDefined();
});

test("reverseString return reversed string", () => {
  const tests = [
    {
      value: "",
      result: "",
    },
    {
      value: ".",
      result: ".",
    },
    {
      value: "a",
      result: "a",
    },
    {
      value: "aa",
      result: "aa",
    },
    {
      value: "Aa",
      result: "aA",
    },
    {
      value: "ab",
      result: "ba",
    },
    {
      value: "aba",
      result: "aba",
    },
    {
      value: "1234",
      result: "4321",
    },
    {
      value: "Hello World!",
      result: "!dlroW olleH",
    },
  ];

  tests.forEach((test) => {
    expect(reverseString(test.value)).toBe(test.result);
  });
});

import capitalize from "./capitalize.js";

test("capitalize exists", () => {
  expect(capitalize).toBeDefined();
});

test("capitalize return something", () => {
  const capitalized = capitalize("");
  expect(capitalized).toBeDefined();
});

test("capitalize return capitalized string", () => {
  const tests = [
    {
      value: "",
      result: "",
    },
    {
      value: "a",
      result: "A",
    },
    {
      value: ".",
      result: ".",
    },
    {
      value: "aa",
      result: "Aa",
    },
    {
      value: ".a",
      result: ".a",
    },
    {
      value: ".a 1 2 3",
      result: ".a 1 2 3",
    },
    {
      value: "a 1 2 3",
      result: "A 1 2 3",
    },
    {
      value: "a 1 2 a",
      result: "A 1 2 a",
    },
    {
      value: "word",
      result: "Word",
    },
    {
      value: "hello world!",
      result: "Hello world!",
    },
    {
      value: "123",
      result: "123",
    },
    {
      value: "a123",
      result: "A123",
    },
    {
      value: "123a",
      result: "123a",
    },
  ];

  tests.forEach((test) => {
    expect(capitalize(test.value)).toBe(test.result);
  });
});

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
  ];

  tests.forEach((test) => {
    expect(capitalize(test.value)).toBe(test.result);
  });
});
console.log(capitalize);

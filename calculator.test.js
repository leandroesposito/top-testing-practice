import calculator from "./calculator.js";

test("calculator return object", () => {
  expect(calculator()).toBeDefined();
});

test("calculator has functions", () => {
  const calc = calculator();
  expect(calc.add());
  expect(calc.subtract());
  expect(calc.divide());
  expect(calc.multiply());
});

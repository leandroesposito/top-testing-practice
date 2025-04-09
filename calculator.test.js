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

test("calculator adds", () => {
  const intTests = [
    {
      a: 0,
      b: 0,
      expect: 0,
    },
    {
      a: 1,
      b: 1,
      expect: 2,
    },
    {
      a: 1,
      b: 1,
      expect: 2,
    },
    {
      a: 3,
      b: 5,
      expect: 8,
    },
    {
      a: -1,
      b: 1,
      expect: 0,
    },
    {
      a: -1,
      b: -1,
      expect: -2,
    },
  ];

  const floatTests = [
    {
      a: 0.1,
      b: 0,
      expect: 0.1,
    },
    {
      a: 0.3,
      b: 0.5,
      expect: 0.8,
    },
    {
      a: 9.9,
      b: 9.9,
      expect: 19.8,
    },
    {
      a: -0.1,
      b: 1,
      expect: 0.9,
    },
    {
      a: -0.14,
      b: -3.6,
      expect: -3.74,
    },
  ];

  const calc = calculator();
  intTests.forEach((test) => {
    expect(calc.add(test.a, test.b)).toBe(test.expect);
  });

  floatTests.forEach((test) => {
    expect(calc.add(test.a, test.b)).toBeCloseTo(test.expect);
  });
});

test("calculator subtract", () => {
  const intTests = [
    {
      a: 0,
      b: 0,
      expect: 0,
    },
    {
      a: 1,
      b: 1,
      expect: 0,
    },
    {
      a: 3,
      b: 2,
      expect: 1,
    },
    {
      a: -1,
      b: 1,
      expect: -2,
    },
    {
      a: -1,
      b: -1,
      expect: 0,
    },
    {
      a: 5,
      b: 7,
      expect: -2,
    },
    {
      a: -5,
      b: 7,
      expect: -12,
    },
    {
      a: 8,
      b: 3,
      expect: 5,
    },
    {
      a: 8,
      b: -3,
      expect: 11,
    },
  ];

  const floatTests = [
    {
      a: 0.1,
      b: 0,
      expect: 0.1,
    },
    {
      a: 0.3,
      b: 0.5,
      expect: -0.2,
    },
    {
      a: 9.9,
      b: 9.9,
      expect: 0,
    },
    {
      a: -0.1,
      b: 1,
      expect: -1.1,
    },
    {
      a: -0.14,
      b: -3.6,
      expect: 3.46,
    },
  ];

  const calc = calculator();
  intTests.forEach((test) => {
    expect(calc.subtract(test.a, test.b)).toBe(test.expect);
  });

  floatTests.forEach((test) => {
    expect(calc.subtract(test.a, test.b)).toBeCloseTo(test.expect);
  });
});

test("calculator divide", () => {
  const calc = calculator();

  expect(calc.divide()).toBeDefined();

  expect(calc.divide(1, 1)).toBe(1);

  const intTests = [
    {
      a: 1,
      b: 1,
      expect: 1,
    },
    {
      a: 3,
      b: 2,
      expect: 1.5,
    },
    {
      a: -1,
      b: 1,
      expect: -1,
    },
    {
      a: -1,
      b: -1,
      expect: 1,
    },
    {
      a: 5,
      b: 7,
      expect: 5 / 7,
    },
    {
      a: -5,
      b: 7,
      expect: -5 / 7,
    },
    {
      a: 8,
      b: 3,
      expect: 8 / 3,
    },
  ];

  intTests.forEach((test) => {
    expect(calc.divide(test.a, test.b)).toBeCloseTo(test.expect);
  });

  const floatTests = [
    {
      a: 0.3,
      b: 0.5,
      expect: 0.3 / 0.5,
    },
    {
      a: 9.9,
      b: 9.9,
      expect: 1,
    },
    {
      a: -0.1,
      b: 1,
      expect: -0.1,
    },
    {
      a: -0.14,
      b: -3.6,
      expect: 0.14 / 3.6,
    },
  ];

  floatTests.forEach((test) => {
    expect(calc.divide(test.a, test.b)).toBeCloseTo(test.expect);
  });

  expect(() => calc.divide(1, 0)).toThrow();
  expect(() => calc.divide(1, 0)).toThrow("cannot divide by 0");
});

test("calculator multiply", () => {
  const calc = calculator();
  expect(calc.multiply()).toBeDefined();

  expect(calc.multiply(1, 1)).toBe(1);
  expect(calc.multiply(3, 2)).toBe(6);
});

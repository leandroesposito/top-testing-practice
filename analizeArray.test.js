import analizeArray from "./analizeArray.js";

test("analizeArray returns something", () => {
  expect(analizeArray([])).toBeDefined();
});

const testCases = [
  {
    value: [1, 8, 3, 4, 2, 6],
    result: analizeArray([1, 8, 3, 4, 2, 6]),
    expected: {
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    },
  },
  {
    value: [3, 3, 3, 3, 3],
    result: analizeArray([3, 3, 3, 3, 3]),
    expected: {
      average: 3,
      min: 3,
      max: 3,
      length: 5,
    },
  },
  {
    value: [1.5, 25, 36, 2, 3.6],
    result: analizeArray([1.5, 25, 36, 2, 3.6]),
    expected: {
      average: 13.62,
      min: 1.5,
      max: 36,
      length: 5,
    },
  },
  {
    value: [-5, 5, 3.15, 1, -13],
    result: analizeArray([-5, 5, 3.15, 1, -13]),
    expected: {
      average: -1.77,
      min: -13,
      max: 5,
      length: 5,
    },
  },
];

test("analizeArray average", () => {
  testCases.forEach((test) => {
    expect(test.result.average).toBeCloseTo(test.expected.average);
  });
});

test("analizeArray min", () => {
  testCases.forEach((test) => {
    expect(test.result.min).toBeCloseTo(test.expected.min);
  });
});

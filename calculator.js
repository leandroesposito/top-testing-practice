export default function calculator() {
  return {
    add: function add(a, b) {
      return a + b;
    },
    subtract: function subtract(a, b) {
      return a - b;
    },
    divide: function divide(a, b) {
      if (b === 0) {
        throw new Error("cannot divide by 0");
      }
      return a / b;
    },
    multiply: function multiply() {},
  };
}

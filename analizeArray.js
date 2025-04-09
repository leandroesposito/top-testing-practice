export default function analizeArray(array) {
  const length = array.length;

  const sum = array.reduce((prev, curr) => curr + prev, 0);

  const average = sum / length;

  return {
    average,
  };
}

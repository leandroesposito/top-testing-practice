export default function capitalize(string) {
  const firstLetter = string.substring(0, 1);
  const rest = string.substring(1);
  return firstLetter.toUpperCase() + rest;
}

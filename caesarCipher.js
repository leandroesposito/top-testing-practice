export default caesarCipher = (string, shift) => {
  if (!string) {
    return "";
  }

  const resArr = [];

  for (let i = 0; i < string.length; i++) {
    const charCode = string.charCodeAt(i);
    const newCode = shiftChar(charCode, shift);
    resArr.push(newCode);
  }

  return String.fromCharCode(...resArr);
};

function shiftChar(charCode, shift) {
  if (charCode >= 65 && charCode <= 90) {
    return ((charCode - 65 + shift) % 26) + 65;
  }
  if (charCode >= 97 && charCode <= 122) {
    return ((charCode - 97 + shift) % 26) + 97;
  }

  return charCode;
}

export default caesarCipher = (string, shift) => {
  if (!string) {
    return "";
  }

  const resArr = [];

  for (let i = 0; i < string.length; i++) {
    const charCode = string.charCodeAt(i);
    const newCode = charCode + shift;
    resArr.push(newCode);
  }

  return String.fromCharCode(resArr);
};

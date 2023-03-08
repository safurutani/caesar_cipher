const ALPHABET = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
function caesarShift(phrase, shift, encode, lowercase) {
  let key = [...ALPHABET];
  let result = "";
  str = phrase.toUpperCase();
  
  //create the key
  for (let i = 0; i < shift; i++) {
    key.push(key.shift());
  }

  //encode the string
  if (encode) {
    for (let i in str) {
      result += key[ALPHABET.indexOf(str[i])];
    }
  }
  //decode the string
  else {
    for (let i in str) {
      console.log(str[i]);
      result += ALPHABET[key.indexOf(str[i])];
    }
  }
  //make result lowercase
  if (lowercase) {
    return result.toLowerCase();
  }
  return result;
}
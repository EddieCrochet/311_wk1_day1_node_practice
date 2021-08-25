const split = (str, delim) => {
  // write code for strings.split
  return str.split(delim);
}

const pairs = (str) => {
  // write code for strings.pairs
  let chunks = [];
  for(let i = 0; i < str.length; i+=2) {
    chunks.push(str.substring(i, i+2))
  }
  return chunks;
}

const reverse = (str) => {
  // write code for strings.reverse
  const revStr = str.split("").reverse().join("");
  return revStr;
}

module.exports = {
  split,
  pairs,
  reverse
}
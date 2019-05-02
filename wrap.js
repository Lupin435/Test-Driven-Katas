// code below

const wrap = (line, maxLen) => {
  if (line.length <= maxLen) {
    return line;
  } else {
    // return line + '\n';
    let formattedString = '';
    for (let char of line) {
      formattedString += char;
      if ((line.indexOf(char) + 1) % maxLen === 0) {
        formattedString += '\n';
      }
    }
    return formattedString;
  }
};

module.exports = wrap;

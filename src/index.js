module.exports = function check(str, bracketsConfig) {
  let stack = [];

  for(let i = 0; i < str.length; i++) {
    for(let j = 0; j < bracketsConfig.length; j++) {
      let currentBracker = str[i];
      let stackTop = stack[stack.length - 1];
      const bracketsPair = {
        [bracketsConfig[j][1]]: bracketsConfig[j][0] // ')': '('
      }

      if(bracketsPair[currentBracker] === stackTop && stack.length > 0) {
        stack.pop();
      } else if(bracketsConfig[j].includes(currentBracker)) {
        stack.push(currentBracker);
      }      
    }
  }
  
  return stack.length === 0;
}
function inverterString(str) {
  let splitString = str.split("");

  let reverseArray = splitString.reverse();
  

  let joinArray = reverseArray.join("");
  
  return joinArray;
}

console.log(inverterString("filipe"));

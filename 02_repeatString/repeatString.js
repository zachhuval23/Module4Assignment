const repeatString = function repeatString(string, number) {
if (number < 1){
  return '';
}
let repeatedString = '';

for (let i = 0; i < number; i++){
  repeatedString += string;
}
return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;

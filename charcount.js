function countLetters(str) {

  var chars = str.split(' ').join('');

  var result = {};

  for (var char of chars) {
    if (result[char]){
      result[char] += 1;
    } else {
      result[char] = 1;
    }
  }

return result;

}
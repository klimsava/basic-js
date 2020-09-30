const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  let result = [];
  if (!Array.isArray(arr)) return false;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
      result.push(arr[i].trim().slice(0, 1).toUpperCase());
    }
  }

  return result.sort().join('');

  throw new CustomError('Not implemented');
  // remove line with error and write your code here
};

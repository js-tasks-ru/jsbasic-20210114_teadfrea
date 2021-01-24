/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  let result = str;
  if (!str) {
      return result;
  }

  result = str[0].toUpperCase() + str.slice(1);
  return result;
}
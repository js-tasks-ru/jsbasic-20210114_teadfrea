/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */

function checkSpam(str) {
  let spamWords = ['xxx', '1xbet'];
  str = str.toLowerCase();
  for (let i = 0; (i+1) <= spamWords.length; i++) {
      if (str.includes(spamWords[i])) {
          return true;
      }
  }
  return false;
}

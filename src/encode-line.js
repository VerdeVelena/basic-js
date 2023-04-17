const {NotImplementedError} = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
const str = "abbcca";
function encodeLine(str) {
	var count = 1;
	var result = "";
	for (var i = 0; i < str.length; i++) {
		if (str[i] === str[i + 1]) {
			count += 1;
		} else {
			result += count + str[i];
			count = 1;
		}
	}
	return result.replace(/1/g, "");
}
console.log(encodeLine(str));

module.exports = {
	encodeLine,
};

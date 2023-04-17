const {NotImplementedError} = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */

function deleteDigit(n) {
	let outputN = 0;
	const arrN = n.toString().split("");

	for (let i = 0; i < arrN.length; i++) {
		const ar = Array.from(arrN);
		ar.splice(i, 1);

		const int = parseInt(ar.join(""));
		if (outputN < int) {
			outputN = int;
		}
		console.log(outputN);
	}
	return outputN;
}

module.exports = {
	deleteDigit,
};

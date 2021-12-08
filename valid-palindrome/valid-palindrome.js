
var isPalindrome = function (s) {
	if (s.length === 0||s.length === 1) {
		return true
	} else {
		let removeSpace = s.split(" ").join("")
		let removeSpecialCharachter = removeSpace.replaceAll(/[^A-Za-z0-9]/g,"")
		let word = removeSpecialCharachter.toLowerCase()
		let reverse = word.split("").reverse().join("")
		if (word === reverse) {
			return true
		}
	}
	return false
};
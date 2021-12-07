var twoSum = function (nums, target) {
	for (index = 0; index < nums.length; index++) {
		let find = target - nums[index]
		const arr=[...nums]
		arr[index]=true
		if (arr.includes(find)) {
			return [index, arr.indexOf(find)]
		}
	}
	return `no result`
};
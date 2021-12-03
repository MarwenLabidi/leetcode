var largestRectangleArea = function (heights) {

	if (heights.length < 1 || heights.length > 10 ** 5) {
		return `wrong input `
	} else {
		const result = []
		const stackValue = [heights[0]]
		const stackPosition = [0]
		for (let index = 1; index < heights.length; index++) {
			if (heights[index] > stackValue[stackValue.length - 1]) {
				stackPosition.push(index)
				stackValue.push(heights[index])
			} else if (heights[index] < stackValue[stackValue.length - 1]) {
				let currentValue = stackValue.pop()
				let currentPosition = stackPosition[stackPosition.length - 1]
				result.push(currentValue * (index - currentPosition))
				stackValue.push(heights[index])
				while (stackValue[stackValue.length - 1] < stackValue[stackValue.length - 2]) {
					currentValue = stackValue.splice(stackValue.length - 2, 1)
					stackPosition.pop()
					currentPosition = stackPosition[stackPosition.length - 1]
					result.push(currentValue * (index - currentPosition))
				}
			}
		}
		while (stackValue.length > 0) {
			let currVal = stackValue.pop()
			let currIndex = stackPosition.pop()
			result.push(currVal * (heights.length - currIndex))
		}
		const max = Math.max(...result)
		return max
	}
};
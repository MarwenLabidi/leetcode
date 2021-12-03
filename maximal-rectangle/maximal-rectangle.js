const stringsToNumbers = (matrix) => {
	const NumbersMatrix = matrix.map(elements => {
		const number = elements.map((element) => {
			return +element
		})
		return number
	});
	return NumbersMatrix
}

const createHistograms = (matrix) => {
	const numbersMatrix = stringsToNumbers(matrix)
	const histograms = [numbersMatrix[0], numbersMatrix[0]]
	for (let index = 1; index < numbersMatrix.length; index++) {
		const histogram = []
		for (let index2 = 0; index2 < numbersMatrix[index].length; index2++) {
			if (numbersMatrix[index][index2] >= 1 && histograms[index][index2] >= 1) {
				histogram.push(histograms[index][index2] + 1)
			} else {
				histogram.push(numbersMatrix[index][index2])
			}
		}
		histograms.push(histogram)
	}
	return histograms
}

const largestRectangleAreaInHistogram = (heights) => {

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
}



var maximalRectangle = function (matrix) {
	if (matrix.length===0) {
		return 0
	}
	const largestAriaInHistograms = []
	const histograms = createHistograms(matrix)
	for (const histogram of histograms) {
		let max = largestRectangleAreaInHistogram(histogram)
		largestAriaInHistograms.push(max)
	}
	const result = Math.max(...largestAriaInHistograms)
	return result
}
var productExceptSelf = function(array) {
	const result=[]
	let leftArr=[1]
	let rightArr=[1]
	for (let index = 1; index < array.length; index++) {
		leftArr.push(leftArr[index-1]*array[index-1])
	}
	for (let index = array.length-2; index >=0; index--) {
		rightArr.unshift(rightArr[index-index]*array[index+1])
	}
	for (let index = 0; index < array.length; index++) {
		result.push(leftArr[index]*rightArr[index])
	}
	return result
}





// this is the first solution come on my mind  :
//  the problem of this solution is it has a quadratic complexity because there is to nested loops : for and reduce

// var productExceptSelf = function(arr) {

//     const answer=[]

//     if(arr.length>10**5||arr.length<2){

//         return`invalid input arr.length :${arr.length}`

//     }else{

//         for(let i=0;i<arr.length;i++){

//             if(arr[i]>30||arr[i]<-30){ 

//                 return`invalid input ${arr[i]}`
//             }else{

//             const nums=[...arr]
//             nums.splice(i,1)
//             let result=nums.reduce((acc,curr)=>acc*curr)

//             if(result<-2147483648||result>2147483647){
//               answer.push(`don't fit in a 32-bit`)
//             }else{
//               answer.push(result)
//                }      
//             }
//         }

//         return answer
//     }
// }



//seconde solution come on my mind its the  worst solution on term of complexity because i used resursion on it and recursion has exponential complexity and there is other problem 
//  dont give you the right result start from the second call because of the global variable 

// var product = function () {
// 	let result = []
// 	let i = 0
// 	return multiply = (arrG) => {

// 		if (arrG.length > 10 ** 5 || arrG.length < 2) {
// 			return `invalid input arr.length :${arr.length}`
// 		} else {
// 			arr = [...arrG]
// 			arr.splice(i, 1)
// 			let res = arr.reduce((acc, curr) => acc * curr)

// 			if (res < -2147483648 || res > 2147483647) {
// 				result.push(`don't fit in a 32-bit`)
// 			} else {
// 				result.push(res)
// 			}

// 			i++
// 			if (i < arrG.length) {
// 				multiply(arrG)
// 			}
// 		}
// 		return result
// 	}
// }

// var productExceptSelf = product()
var findMedianSortedArrays = function(nums1, nums2) {
let arr = [...nums1,...nums2];
let sortedArr = arr.sort((a,b) => a-b);
if(sortedArr.length === 1){
return sortedArr[0].toFixed(5);
}
else if(sortedArr.length%2 != 0){
let floor = Math.floor(arr.length / 2);
return sortedArr[floor].toFixed(5);
}
else if(sortedArr.length%2 === 0){
let floor = arr.length / 2;
return ((arr[floor]+arr[floor-1])/2).toFixed(5)
}
};
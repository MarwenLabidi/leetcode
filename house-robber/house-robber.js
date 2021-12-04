var rob = function(nums) {
    for(let index = nums.length - 3; index >= 0 ; index --){
        nums[index] += Math.max(nums[index+3],nums[index+2]) || nums[index+2];
    }
    return Math.max(nums[0],nums[1]) || nums[0];
};
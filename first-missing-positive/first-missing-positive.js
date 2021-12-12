var firstMissingPositive = function(nums) {
    for(let i = 0; i < nums.length; i++){
        if(nums[i] >= 0 && nums[i] < nums.length && nums[i]-1 != i && nums[i] != nums[nums[i]-1]){
            [nums[nums[i]-1], nums[i]] = [ nums[i], nums[nums[i]-1] ];
            i--;
        }
    }

    let target = 1;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] != target){
            return target;
        }else{
            target++;
        }
    }
    return nums.length+1;
    
};
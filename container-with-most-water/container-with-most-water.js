 var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let area = 0;
    
    while (left < right) {
        area = Math.max(Math.min(height[left], height[right]) * (right - left), area);
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    
    return area;
};
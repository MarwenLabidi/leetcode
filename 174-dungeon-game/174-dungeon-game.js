var calculateMinimumHP = function(dungeon) {
    
    if (dungeon.length < 1 || dungeon[0].length < 1) {
        return dungeon;
    }
    
    const rowLen = dungeon.length;
    const colLen = dungeon[0].length;
    
    for (let row = rowLen - 1; row >= 0; row--) {
        for (let col = colLen - 1; col >= 0; col--) {
            if (col + 1 >= colLen && row + 1 >= rowLen) {
                dungeon[row][col] = 1 - (dungeon[row][col]) < 1 ? 1 : 1 - (dungeon[row][col]);
            } else if (col + 1 >= colLen && row + 1 < rowLen) { 
                if((dungeon[row+1][col] - dungeon[row][col]) < 1) {
                    dungeon[row][col] = 1
                } else {
                    dungeon[row][col] = dungeon[row+1][col] - dungeon[row][col];    
                }
            } else if (col + 1 < colLen && row + 1 >= rowLen) {
                if((dungeon[row][col+1] - dungeon[row][col]) < 1) {
                    dungeon[row][col] = 1
                } else {
                    dungeon[row][col] = dungeon[row][col+1] - dungeon[row][col];    
                }
            } else {
                const rightHealth = dungeon[row][col+1] - dungeon[row][col] < 1 ? 1 : dungeon[row][col+1] - dungeon[row][col];
                const downHealth = dungeon[row+1][col] - dungeon[row][col] < 1 ? 1 : dungeon[row+1][col] - dungeon[row][col];
                dungeon[row][col] = Math.min(rightHealth, downHealth);
            }
        }
    }
    
    return dungeon[0][0];
};
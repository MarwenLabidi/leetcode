var goodNodes = function(root) {
    let count=0;
    dfs(root,Number.MIN_SAFE_INTEGER);
    return count;
     function dfs(node,max){
         if(node===null){
             return 0;
         }
         if(node.val>=max){
             max = node.val;
             count++;
         }
         dfs(node.left,max);
         dfs(node.right,max);
     }
};
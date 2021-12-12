var minWindow = function(s, t) {
    let map = {}
    
    for(let i = 0; i< t.length; i++) {
        if(map[t[i]] === undefined) map[t[i]] = 1;
        else map[t[i]]++;
    }
    
    let right = -1;
    let left = 0;
    let min = '';
    let uniqueLetters = Object.keys(map).length;
    
    while(right <= s.length) {
        if(uniqueLetters !== 0) { 
           right++;
        
           let curr = s[right];
        
           if(map[curr] !== undefined) map[curr]--;
           if(map[curr] === 0) uniqueLetters--;
        } else {
            let curr = s[left];
            
            if(map[curr] !== undefined) map[curr]++;
            if(map[curr] > 0) uniqueLetters++;
            
            let temp = s.substring(left, right + 1);
            
            if(min === '') min = temp
            else min = min.length < temp.length ? min : temp;
            
            left++;
        }
       
    }
    return min;
};
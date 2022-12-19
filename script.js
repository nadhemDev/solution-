function getLongestAscSs(arr){
    var allSubsequence = [],
        longestSubsequence = null,
        longestSubsequenceLength = -1;

    for(var i=0;i<arr.length;i++){          //i=1
        var subsequenceForCurrent = [arr[i]],
            current = arr[i],
            lastElementAdded = -1;
        for(var j=i;j<arr.length;j++){
            var subsequent = arr[j];
            if((subsequent > current) && (lastElementAdded<subsequent)){
                subsequenceForCurrent.push(subsequent);
                lastElementAdded = subsequent;
            }
        }
        allSubsequence.push(subsequenceForCurrent);
    }
    for(var i in allSubsequence){
        var subs = allSubsequence[i];
        if(subs.length>longestSubsequenceLength){
            longestSubsequenceLength = subs.length;
            longestSubsequence = subs;
        }
    }
    return longestSubsequence;
}


(function Test(){
    var exmple = [87,88,91, 10, 22, 9,92, 94, 33, 21, 50, 41, 60, 80];
    console.log(getLongestAscSs(exmple));
})();
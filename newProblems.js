/*Back tracking

Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the 
frequency
 of at least one of the chosen numbers is different.

The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

 

Example 1:

Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.


*/ 


/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    function backtrack(remain, start, path) {
        if (remain < 0) {
            return;
        }
        if (remain === 0) {
            combinations.push([...path]);
            return;
        }
        for (let i = start; i < candidates.length; i++) {
            path.push(candidates[i]);
            backtrack(remain - candidates[i], i, path);
            path.pop();
        }
    }
    const combinations = [];
    backtrack(target, 0, []);     
    return combinations;

};



/*
Bob is stuck in a dungeon and must break n locks, each requiring some amount of energy to break. The required energy for each lock is stored in an array called strength where strength[i] indicates the energy needed to break the ith lock.

To break a lock, Bob uses a sword with the following characteristics:

The initial energy of the sword is 0.
The initial factor x by which the energy of the sword increases is 1.
Every minute, the energy of the sword increases by the current factor x.
To break the ith lock, the energy of the sword must reach at least strength[i].
After breaking a lock, the energy of the sword resets to 0, and the factor x increases by a given value k.
Your task is to determine the minimum time in minutes required for Bob to break all n locks and escape the dungeon.

Return the minimum time required for Bob to break all n locks.

 

Example 1:

Input: strength = [3,4,1], k = 1

Output: 4

Explanation:

Time	Energy	x	Action	Updated x
0	0	1	Nothing	1
1	1	1	Break 3rd Lock	2
2	2	2	Nothing	2
3	4	2	Break 2nd Lock	3
4	3	3	Break 1st Lock	3
The locks cannot be broken in less than 4 minutes; thus, the answer is 4.


*/ 
/**
 * @param {number[]} strength
 * @param {number} k
 * @return {number}
 */
var findMinimumTime = function(strength, k) {
    var permutations = permute(strength);
    let minTime = 1500000
    permutations.forEach(permutation=>{
        if(calculateTime(permutation,k)<minTime){
            minTime = calculateTime(permutation,k);
        }
    })
    return minTime
};

function calculateTime(permutation , k ){
    let x = 1
    let time = 0 ;
    let energy = 0 ;
    let i = 0 ;
    while(i<permutation.length){
        while(energy< permutation[i]){
            time++;
            energy+=x
        }
        energy=0
        x+=k;
        i++;
    }
    return time;
}



var permute = function(nums) {
    let result = [];

    function backtrack(start) {
        if (start === nums.length) {
            result.push([...nums]); // Store a completed permutation
            return;
        }

        for (let i = start; i < nums.length; i++) {
            [nums[start], nums[i]] = [nums[i], nums[start]]; // Swap
            backtrack(start + 1); // Recurse
            [nums[start], nums[i]] = [nums[i], nums[start]]; // Backtrack (Undo swap)
        }
    }

    backtrack(0);
    return result;
};

// **Example Usage**
console.log(findMinimumTime([2,5,4],2));

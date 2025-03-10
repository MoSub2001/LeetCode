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


 class DoubleNode{
    constructor(key ,value){
        this.key= key
        this.value= value
        this.next = null;
        this.prev = null;
    }
 }


 
var LRUCache = function(capacity) {
this.capacity = capacity;
this.cache = new Map();
this.head = new DoubleNode(null ,null)
this.tail= new DoubleNode(null , null)
this.head.next = this.tail
this.tail.prev= head

LRUCache.prototype.put = function(key, value) {
    if (this.cache.has(key)){// update the key and it should be the tail now
        this.removeNode(this.cache.get(key))
        addToTail(newNode)
        this.cache.set(key,newNode)
    }
    else{
        let newNode = new DoubleNode(key,value)
        if(this.capacity===0){
            removeNode(this.head.next)
            this.cache.delete(this.head.next.key)
            addToTail(newNode);
        }
        else{
            addToTail(newNode)
            this.cache.set(key,newNode)
            this.capacity--;
            }

    }
}

LRUCache.prototype.get= function(key){
    if (this.cache.has(key)){
        tempNode = this.cache.get(key)
        this.removeNode(tempNode)
        this.addToTail(tempNode)
        return tempNode.value
    }
    else return -1;
}


LRUCache.prototype.addToTail = function(node) {
this.tail.prev.next=node;
node.prev=this.tail.prev;
this.tail.prev=node;
node.next=this.tail;
}

LRUCache.prototype.removeNode = function(node) {
node.prev.next = node.next
node.next.prev = node.prev
};



};


var myAtoi = function (input) {
    let sign = 1;
    let result = 0;
    let index = 0;
    let n = input.length;

    let INT_MAX = Math.pow(2, 31) - 1;
    let INT_MIN = -Math.pow(2, 31);

    // Discard all spaces from the beginning of the input string.
    while (index < n && input[index] == " ") {
        index++;
    }

    // sign = +1, if it's positive number, otherwise sign = -1.
    if (index < n && input[index] == "+") {
        sign = 1;
        index++;
    } else if (index < n && input[index] == "-") {
        sign = -1;
        index++;
    }

    // Traverse next digits of input and stop if it is not a digit.
    // End of string is also non-digit character.
    while (index < n && input[index] >= "0" && input[index] <= "9") {
        let digit = input[index] - "0";

        // Check overflow and underflow conditions.
        if (result > Math.floor(INT_MAX / 10) || (result == Math.floor(INT_MAX / 10) && digit > INT_MAX % 10) ) {
            // If integer overflowed return 2^31-1, otherwise if underflowed return -2^31.
            return sign == 1 ? INT_MAX : INT_MIN;
        }

        // Append current digit to the result.
        result = 10 * result + digit;
        index++;
    }

    // We have formed a valid number without any overflow/underflow.
    // Return it after multiplying it with its sign.
    return sign * result;
};



var subarraySum = function(nums, k) {
  if(nums.length===1 && nums[0]===k){
    return 1;
  }  

  let sum=0
  for (let index = 0; index < nums.length; index++) {
    sum+= nums[index];
  }
  if(sum===k){
    return 1
  }

  let result = 0;
  for (let index = 0; index < nums.length; index++) {
    if(nums[index]===k){
        result++;
    }
  }

  

};
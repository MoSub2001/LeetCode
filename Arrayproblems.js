

/*Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order. 
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

*/

var twoSum = function(nums, target) { // solution 1 n^2
    var len = nums.length;
    let ans = [];
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if(i!=j){
                if(nums[i] + nums[j] == target) {
                    ans[0]=i;
                    ans[1]=j;
                    return ans;
                }
            }
            
        }
        
    }
    return [];
};



var twoSum = function(nums, target) { // use a map and check if the map contains the complement of the element to get the result
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
     const complement = target - nums[i];
     if (map.has(complement)) {
         return [map.get(complement), i];
     }
     map.set(nums[i], i);
 }
 // Return an empty array if no solution is found
 return [];
 };
 

/*

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.



Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
Example 2:

Input: height = [1,1]
Output: 1


**/ 

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left=0;
    let right = height.length;
    let maxArea = 0;
    while(left<right){
        let minHeight = height[left] <height[ right] ? height[left] : height[right];
        let area= (right-left) * (minHeight);
        maxArea = area> maxArea ? area : maxArea;
        if(height[left] <height[ right]){
            left++;
        }
        else{
            right--;
        }
    }
    return maxArea;
};

let arr = [1,8,6,2,5,4,8,3,7];

/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  if(nums.length<3){
    return [];
  }
  if(nums.length==3){
    if(nums[0]+nums[1]+nums[2]==0){
        return nums;
    }
    return [];
  }
  nums.sort(function(a, b){return a - b})
  const hash = new Map();
  for (let index = 0; index < nums.length; index++) {
    hash.set(nums[index],index);
  }

  let left = 0;
  let right = nums.length-1
  let sum = 0
  let res = []
  while(left<right){
    sum = nums[left]+nums[right];
    if(hash.has(-sum)){
        const complement = hash.get(-sum)
        if(complement && (complement!=left) &&(complement!=right)){
        res.push( [nums[left], nums[right], nums[complement]]);
        }
        
    }
    if(sum<0){
        left++;
    }
    else{
        right--;
    }
    
  }
  return res;
    
};

let nums = [-1,0,1,2,-1,-4]
console.log(threeSum(nums))


// var threeSum = function (nums) {
//     nums.sort((a, b) => a - b);
//     let res = [];
//     for (let i = 0; i < nums.length && nums[i] <= 0; ++i)
//         if (i === 0 || nums[i - 1] !== nums[i]) {
//             twoSumII(nums, i, res);
//         }
//     return res;
// };

// let twoSumII = function (nums, i, res) {
//     let lo = i + 1,
//         hi = nums.length - 1;
//     while (lo < hi) {
//         let sum = nums[i] + nums[lo] + nums[hi];
//         if (sum < 0) {
//             ++lo;
//         } else if (sum > 0) {
//             --hi;
//         } else {
//             res.push([nums[i], nums[lo++], nums[hi--]]);
//             while (lo < hi && nums[lo] == nums[lo - 1]) ++lo;
//         }
//     }
// };
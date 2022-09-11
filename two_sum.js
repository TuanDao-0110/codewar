// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.



// Example 1:

// Input: nums = ç, target = 9
// Output: [0, 1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
//     Example 2:

// Input: nums = [3, 2, 4], target = 6
// Output: [1, 2]
// Example 3:

// Input: nums = [3, 3], target = 6
// Output: [0, 1]

let twoSum = (nums, target) => {
    // check 1 nums 
    let flag = true;
    let index = -1;
    let result = [];
    while (flag) {
        index++;
        if (nums[index] + nums[index + 1] == target) {

            result.push(index);
            result.push(index + 1);
            flag = false;
        }

    }
    console.log(result)
    return result
}
twoSum([3, 2, 4], 6)


/*
Algorithm: Get Age Range
Input: array of ages
Output: age range

Steps:
1. Handle edge cases
2. Find min and max using spread operator and find difference
...
*/
 export function getAgeRange(ages) {
    if(ages.length === 0 || !Array.isArray(ages)){return "Invalid"}
    return (Math.max(...ages) - Math.min(...ages))
}

// Time complexity:O(n)
// Space complexity:0(1)
// console.log(getAgeRange(1))

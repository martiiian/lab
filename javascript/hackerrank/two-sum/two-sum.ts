function twoSum(nums: number[], target: number): number[] {
  let numMap: Map<number, number> = new Map<number, number>()

  for (let i = 0; i < nums.length; i++) {
    let remain = target - nums[i]
    if (numMap.has(remain)) {
      return [numMap.get(remain), i]
    }

    numMap.set(nums[i], i)
  }
};

console.log(twoSum([3, 2, 4], 6))
console.log(twoSum([2,7,11,15], 9))

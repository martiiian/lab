function pivotIndex(nums) {
  let leftSum = [];
  let rightSum = [];

  for (let i = 0; i < nums.length; i++) {
    const lastLeft = leftSum[leftSum.length - 1] || 0;
    const lastRight = rightSum[rightSum.length - 1] || 0;

    leftSum.push(nums[i] + lastLeft);
    rightSum.push(nums[nums.length - (i + 1)] + lastRight);
  }

  for (let i = 0; i < leftSum.length; i++) {
    if (i + 1 === leftSum.length) return -1;
    for (let j = 0; j < rightSum.length; j++) {
      if (rightSum[j] === leftSum[i]) return i + 1;
    }
  }

  console.log(leftSum, rightSum);
}

//1 2 3 4 5 

  //for (const numIndex in nums) {
    //sum2 += nums[numIndex];
    //if (sum2 > middle && middle > 0) {
      //if (+numIndex + 1 === nums.length) return -1;
      //if (+numIndex === 0) return 0;
      //return +numIndex;
    //} else if (middle < 0 && sum2 < middle) {
      //return +numIndex;
    //}
  //}

 console.log('[1, 7, 3, 6, 5, 6]', pivotIndex([1, 7, 3, 6, 5, 6]), ';the right answer = 3', )
 console.log('[1, 2, 3]', pivotIndex([1, 2, 3]), ';the right answer = -1', )
 console.log('[2, 1, -1]', pivotIndex([2, 1, -1]), ';the right answer = 0', )
 console.log('[-1, -1, -1, -1, -1, -1]', pivotIndex([-1, -1, -1, -1, -1, -1]), ';the right answer = -1', )
console.log('[-1, -1, -1, -1, -1, 0]', pivotIndex([-1, -1, -1, -1, -1, 0]), ';the right answer = 2', )

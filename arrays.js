function getSecondLargest(nums) {
    // Complete the function
    let uniNums = Array.from(new Set(nums));
    let sortNums = uniNums.sort((a, b) => b - a);
    return sortNums[1];
}

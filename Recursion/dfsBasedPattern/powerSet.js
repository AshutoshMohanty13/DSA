//here we are finding the power set of a given array
//time complexity = O(n2^n)
//space complexity = O(n2^n)

const subsets = (nums) => {
  /**
   * this is for leetcode 90
   * nums = nums.sort((a,b) => {
        return a-b;
    }) 
    */
  //global result set
  const result = [];

  //dfs
  const dfs = (i, nums, output) => {
    //base case
    if (i == nums.length) {
      result.push(output.slice());
      return;
    }

    //recursive function
    //exclude
    dfs(i + 1, nums, output);

    //include
    //first pust the ele into the output then pop it
    output.push(nums[i]);
    dfs(i + 1, nums, output);
    output.pop();
  };
  dfs(0, nums, []);
  return result;
  /**
   * this is for leetcode 90
   * const hash = {};
  for (let ele of result) {
    if (hash[ele]) continue;
    hash[ele] = ele;
  }
  return Object.values(hash);
   */
};
console.log(subsets([1, 2, 2]));

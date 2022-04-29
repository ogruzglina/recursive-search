
function recursiveSearch(arr, target) {
  // function iterativeSearch(arr, target) {
  //   for (const value of arr) {
  //     if (value === target) {
  //       return true;
  //     }
  //   }
  //   return false;
  // }

  //check if arr is empty if yes - return failures
  if (arr.length === 0) {
    return false;
  } else {
    //if not, then check 1st arr elem with target, it equal then return true
    if (arr[0] === target) {
      return true;
    } 
    return recursiveSearch(arr.slice(1), target);
  }
}

if (require.main === module) {
  // add your own tests in here
  console.log("[1, 2, 3], 2 - Expecting: true");
  console.log("=>", recursiveSearch([1, 2, 3], 2));

  console.log("---------");

  console.log("[3, 2, 1], 4 - Expecting: false");
  console.log("=>", recursiveSearch([3, 2, 1], 4));

  console.log('---------');

  console.log("[], 4 - Expecting: false");
  console.log("=>", recursiveSearch([], 4));
}

module.exports = recursiveSearch;

// Please add your pseudocode to this file
// And a written explanation of your solution

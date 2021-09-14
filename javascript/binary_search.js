function binarySearch(arr, target) {
  if(arr.length === 0) return false
  const current = Math.floor(arr.length / 2)
  const currentValue = arr[current]
  if(currentValue === target) return true
  const side = currentValue > target ?
    arr.slice(0, current) : arr.slice(current + 1)
  return binarySearch(side, target)
}

// BONUS: MODIFY YOUR CODE TO RETURN THE INDEX OF THE TARGET, -1 IF NOT FOUND
function binarySearchIndex(arr, target) {
  if (arr.length === 0) return -1
  const current = Math.floor(arr.length / 2)
  const currentValue = arr[current]
  if (currentValue === target) return current
  if (currentValue > target) {
    return binarySearchIndex(arr.slice(0, current), target)
  } else {
    const idx = binarySearchIndex(arr.slice(current + 1), target)
    if (idx === -1) return -1
    return idx + current + 1
  }
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: true");
  console.log("=>", binarySearch([1, 2, 3], 3));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", binarySearch([3, 5, 9], 10));

  // UNCOMMENT FOR BONUS
  // console.log("");
  // console.log("Expecting: 0");
  // console.log("=>", binarySearchIndex([1, 2, 3], 1));

  // console.log("");

  // console.log("Expecting: -1");
  // console.log("=>", binarySearchIndex([4, 7, 20], 100));
}

module.exports = {
  binarySearch,
  binarySearchIndex
};

// Add a written explanation of your solution

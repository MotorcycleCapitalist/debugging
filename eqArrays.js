// function implementation
const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) 
  if ([array1] === [array2]) {
    return true 
  } else {
    return false
  }
  }
  
  // TEST CODE
  eqArrays([1, 2, 3], [1, 2, 3]) // => true
  eqArrays([1, 2, 3], [3, 2, 1]) // => false
  
  eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
  eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

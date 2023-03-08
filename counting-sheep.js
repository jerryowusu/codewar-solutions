// DESCRIPTION:
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

// ARRAYSFUNDAMENTALS


// Ruby 

def countSheeps array
    # May the force be with you
  array.count(true)
end


def countSheeps array
  sum = 0
  
 for sheep in array 
   if (sheep == true)
     sum += 1
   end
  end
  return sum
end


def countSheeps array
    # May the force be with you
  sum = 0
  array.each do |element|
    if element == true
      sum += 1
    end
  end
  return sum
end



// JavaScript 

function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  sum = 0
  for (i = 0; i < arrayOfSheep.length; i++) {
    if(arrayOfSheep[i] === true) sum += 1  
  }
    return sum
}


function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  let total = 0
  
  for (i=0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] === true) {
      total += 1
    }
  }
  return total
}


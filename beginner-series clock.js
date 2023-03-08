// DESCRIPTION:
// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59
// FUNDAMENTALS


Ruby 

def past(h, m, s)
  # Good Luck!
  ((60 * 60 * h) + (60 * m) + (s)) * 1000
end


Javascript

function past(h, m, s){
  //#Happy Coding! ^_^
 return ((60 * 60 * h) + (60 * m) + (s)) * 1000
 }

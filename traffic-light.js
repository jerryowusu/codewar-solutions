// DESCRIPTION:
// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// For example, when the input is green, output should be yellow.

// FUNDAMENTALS

Ruby

def update_light(current)
  # your code here
  {'green' => 'yellow', 'yellow' => 'red', 'red' => 'green' }[current]
end


JavaScript

def update_light(current)
  # your code here
  if current === 'green' 
    return 'yellow'
  elsif current === 'yellow' 
    p 'red'
  elsif current === 'red' 
    p 'green'
  end
end



function updateLight(current) {
  
  //your code here!
  if (current === 'green')
  return 'yellow'
  else if (current === 'yellow')
  return 'red'
  else if (current === 'red')
  return 'green'

}

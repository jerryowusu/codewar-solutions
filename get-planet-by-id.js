// DESCRIPTION:
// The function is not returning the correct values. Can you figure out why?

// Example (Input --> Output ):

// 3 --> "Earth"
// DEBUGGING

Ruby

def get_planet_name(id)   
    %w[0 Mercury Venus Earth Mars Jupiter Saturn Uranus Neptune][id]
end


def get_planet_name(id)
  # This doesn't work; Fix it!
  case id
    when 1 then "Mercury"
    when 2 then "Venus"
    when 3 then "Earth"
    when 4 then "Mars"
    when 5 then "Jupiter"
    when 6 then "Saturn"
    when 7 then "Uranus"  
    when 8 then "Neptune"
  end
end


JavaScript

function getPlanetName(id){
  var name;
  switch(id){
    case 1:
      name = 'Mercury'
      break;
    case 2:
      name = 'Venus'
      break;
    case 3:
      name = 'Earth'
      break;
    case 4:
      name = 'Mars'
      break;
    case 5:
      name = 'Jupiter'
      break;
    case 6:
      name = 'Saturn'
      break;
    case 7:
      name = 'Uranus'
      break;
    case 8:
      name = 'Neptune'
      break;
  }
  
  return name;
}

const quarterOf = (month) => {
  // Your code here
  
  if (month === 1 || month === 2 || month === 3){
    return 1;
  } else if ( month === 4 || month === 5 || month === 6 ) {
    return 2;
  } else  if (month === 7 || month === 8 || month === 9) {
    return 3;
  } else return 4
  
//  OR
  
  if (month <= 3) {
    return 1;
  } else if (month <= 6) {
    return 2;
  } else if (month <= 9) {
    return 3
  } else return 4
  
  
  
}

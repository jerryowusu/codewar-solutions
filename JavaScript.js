## DNA strands

1 function DNAStrand(dna){
  let result = ''
  
  for (let i=0; i<dna.length; i++) {
    if (dna[i] === "A") result += "T"
    if (dna[i] === "T") result += "A"
    if (dna[i] === "C") result += "G"
    if (dna[i] === "G") result += "C"
  }
  return result
}


function DNAStrand(dna){
  //your code here
  const dnaStrand = {
    'A' : 'T',
    'T' : 'A',
    'C' : 'G',
    'G' : 'C'
  }
  
  return dna.split('').map(elem => dnaStrand[elem]).join('')
  
}



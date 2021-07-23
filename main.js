// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};
const pAequorFactory=(specimenNum,dna)=>{

  return {
    specimenNum,
    dna,
    mutate(){
      let toChange = Math.floor(Math.random()* 15);
      let newBase = returnRandBase();
      while(newBase===this.dna[toChange]){
        newBase = returnRandBase();
      }
      this.dna[toChange]=newBase;
    },
    compareDNA(pAequor){
      let sim=0;
      let sample1 = pAequor.dna;
      let sample2=this.dna;
      sample1.forEach((e,i)=>{
        if(e===sample2[i]){
          sim += 1;
        }
      })
      console.log(`specimen #1 and specimen #2 have ${(sim/15)*100}% DNA in common`)
    },
    willLikelySurvive(){
      let c=0;
      let g=0;
      this.dna.forEach(d=>{
        if(d==='C'){c++;}
        else if(d==='G'){g++}
      })
     return g + c > 0.6*this.dna.length ;
    },
  }
}

let pAequorArray=[]

for(let i=0; i<30;i++){
  let strand = mockUpStrand();
  pAequorArray.push(pAequorFactory(i,strand))
}

//console.log(pAequorArray)
console.log(pAequorArray[20]);
pAequorArray[20].mutate();
console.log(pAequorArray[20]);









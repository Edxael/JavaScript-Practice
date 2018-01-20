
// console.log("Hello from here...");

const mostPopular = (str) => {
  const tempObj = str.toLowerCase()
                     .split("")
                     .reduce((pv, cv) => {
                       pv[cv] = ( pv[cv] + 1 ) || 1
                       return pv
                     }, {})

  let max = 0
  let cha = ""

  Object.keys(tempObj).forEach( (x) => {
    if(tempObj[x] > max){
      max += 1
      cha = x
    }
  })

  return `The mos common letter in: "${str}" is "${cha}" with ${tempObj[cha]} occurences.`
}


console.log( mostPopular("alabama") )

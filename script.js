function mincost(arr, totalCost = 0){ 
  if(arr.length === 1){
    return totalCost
  }

  const copy = [...arr].sort((a, b) => a - b) 
  const sum = copy[0] + copy[1]
  totalCost += sum

  const out = [sum, ...copy.slice(2)]

  return mincost(out, totalCost)
}





module.exports=mincost;

function mincost(arr)
{ 
const arrayCopy=[...arr].sort((a,b)=>a-b)
  const out=[]
	let sum=arrayCopy[0]
  for(let i=1;i<arrayCopy.length;i++){
	   sum=sum+arrayCopy[i]
	  out.push(sum)
  }

	const output=out.reduce((a,b)=>a+b)
	return output
}



module.exports=mincost;

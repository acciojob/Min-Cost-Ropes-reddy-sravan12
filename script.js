function mincost(arr)
{ 
  const out=[]
  for(let i=0;i<arr.length-1;i++){
	  let sum=arr[i]+arr[i+1]
	  out.push(sum)
  }
return out.reduce((a,b)=>a+b)
}

module.exports=mincost;

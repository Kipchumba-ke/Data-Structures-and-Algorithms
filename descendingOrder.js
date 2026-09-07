function descendingOrder(n){
  //...
  if (n < 0){
    return 0
  }else {
    let nArr = Array.from(String(n), Number)
    for(let i = 0;i<nArr.length -1;i++){
      for(let j=0; j< nArr.length -i-1;j++){
        if(nArr[j]<nArr[j+1]){
          const temp = nArr[j]
          nArr[j] = nArr[j+1]
          nArr[j+1] = temp
        }
      }
    }
    return Number(nArr.join(""))
  }
}
console.log(descendingOrder(1234515))

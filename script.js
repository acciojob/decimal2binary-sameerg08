function decimalToBinary(num) {
  //Write you code here
	let ans="";
  while (num>0) {
  	ans+=num%2;
	num=Math.floor(num/2);
  }
	let fans="";
	for(let i=ans.length-1;i>=0;i--){
		fans+=ans[i];
	}
	// console.log(fans);
	return fans;
}

// decimalToBinary(8);
window.decimalToBinary = decimalToBinary;

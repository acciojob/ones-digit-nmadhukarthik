function onesDigit(n) {
  // your code here
	if(n>0)
	{
		let ones = n%10;
		return ones;
	}
	else
	{
		return "Enter positive number";
	}
	
}

// Do not change the code below

const n = prompt("Enter Number:");
alert(onesDigit(n));

function stringGen()
{
   var numIP = document.getElementById("num").value;
   if(numIP > 0){
       var result = "";
       for(i=0; i<numIP; i++){
           var randomNum = 0;
		   while(!(randomNum>47 && randomNum<58) && !(randomNum>96 && randomNum<123)
				&& !(randomNum>64 && randomNum<91))
				randomNum = parseInt(48 + Math.random()*74);    //122 (ASCII of 'z') - 48 (ASCII of 0) = 74 (search space)
		   
           result += String.fromCharCode(parseInt(randomNum));
       }
       document.getElementById("result").textContent= result;
   }
   else{
       document.getElementById("result").textContent = "Please enter a valid input";
   }
}
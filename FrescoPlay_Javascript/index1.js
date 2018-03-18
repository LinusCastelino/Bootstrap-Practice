var inputArr = new Array();
inputArr.push(0);
function update(value) {
	if(isNaN(value) && inputArr.length != 0 && isNaN(inputArr[inputArr.length-1])){
		//if two operators are clicked consecutively
		inputArr.pop();
		inputArr.push(value);
		}
		else{
			inputArr.push(value);
			}
		updateIPTxtBox();
}    //update()

function updateIPTxtBox(){
	var str = "";
	for(i=0; i<inputArr.length; i++){
		if(isNaN(inputArr[i])){
			str += " "+inputArr[i]+" ";
			}
		else{
			if(i == 1){    //to avoid the leading zero
			str = ""+inputArr[i];
				}
			else{
				str += inputArr[i];
				}
			}
		}
		
	document.getElementById("screen").value = str;
}    //updateIPTxtBox()

function result() {
    if(isNaN(inputArr[inputArr.length -1])){
		//if last input was an operator, ignore
		inputArr.pop();
		}
	
	//Simple calculator does not follow BODMAS
	var finalResult;
	var temp = 0;
	var prevOp = undefined;
	for(i=0; i<inputArr.length; i++){
		if(isNaN(inputArr[i])){
			if(prevOp == undefined){
				finalResult = temp;
				prevOp = inputArr[i];
			}
			else{
				finalResult = evaluate(finalResult, temp, prevOp);
				}
			temp = 0;
			prevOp = inputArr[i];
			}
		else{
			temp = temp*10 + inputArr[i];
				}
		}
		finalResult = evaluate(finalResult, temp, prevOp);
		
		document.getElementById("screen").value = "Result : "+finalResult;
}    //result()

function evaluate(finalResult, temp, prevOp){
	if(prevOp == '+')
		finalResult += temp;
	else if(prevOp == '-')
		finalResult -= temp;
	else if(prevOp == '*')
		finalResult *= temp;
	else if(prevOp == '/')
		finalResult /= temp;
		
	return finalResult;
}

function resetIP(){
	var inputArrLength = inputArr.length;
    //clear the global var inputArr
	for(i=0; i<inputArrLength; i++){
		inputArr.shift();
		}
	inputArr.push(0);
	document.getElementById("screen").value = "0";
	
}    //reset();
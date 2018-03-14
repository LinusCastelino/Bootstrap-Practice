flipToBack = function(){
	var front2Div = document.getElementById("front2");
	var back2Div = document.getElementById("back2");
	
	front2Div.style.transform = "rotateX(-180deg)";
	back2Div.style.transform = "rotateX(0deg)";
}
	
	
flipToFront = function(){
	var front2Div = document.getElementById("front2");
	var back2Div = document.getElementById("back2");
	
	front2Div.style.transform = "rotateX(0deg)";
	back2Div.style.transform = "rotateX(180deg)";
}
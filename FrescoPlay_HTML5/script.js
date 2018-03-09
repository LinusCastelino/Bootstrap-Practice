draw = function(){
	var pageCanvas = document.getElementById("canvas1");    //access the canvas on the webpage
	var ctx = pageCanvas.getContext('2d');    //get its 2D context

	ctx.fillStyle="blue";

	//write text
	ctx.font = "50px Sans Serif";
	ctx.fillText("Hello", 820,100);

	//draw a rectanle
	ctx.lineWidth="5";
	ctx.strokeStyle="red"
	ctx.strokeRect(20,20,200,200);

	//fill the rectangle with color
	ctx.fillRect(20,20,200,200);

	//draw lines and close the path
	ctx.lineWidth="10";
	ctx.strokeStyle="orange";
	ctx.beginPath();
	ctx.moveTo(320,220);
	ctx.lineTo(520,220);
	ctx.lineTo(420,20);
	ctx.closePath();	
	ctx.stroke();
	ctx.fill();

	//draw a circle
	ctx.beginPath();
	//ctx.moveTo(150,300);    //to ensure that a sector is formed if the circle is cut
	ctx.arc(620, 100, 50, 0, Math.PI*2, false);    //arc(x coordinate, y coordinate, radius, start radian, end radian, draw clockwise)
	ctx.fill();


	//some animation
	var animateCounter=0;
	animate = function(action){
		animateCounter++;
		var posX=0, posY;
		if(action == 'down')
			posY=0;
		if(action == 'up')
			posY=pageCanvas.height;
		var intervalAction = setInterval(function(){

			posX += 12;
			if(action == 'down')
				posY += Math.random()*10;
			if(action == 'up')
				posY -= Math.random()*10;
				
			//refreshing the canvas with every interval
			ctx.fillStyle="rgba(255, 255, 255, 0.09)";
			ctx.fillRect(0,0, pageCanvas.width, pageCanvas.height);

			ctx.fillStyle= "black";
			ctx.beginPath();
			ctx.arc(posX, posY, 50, 0, Math.PI*2, false); 
			ctx.fill();

			if(posX > pageCanvas.width){
				clearInterval(intervalAction);
				console.log("intervalAction stopped");
				if(animateCounter <10){
					if(action == 'up')
						animate('down');
					if(action == 'down')
						animate('up');
				}
			}
		}, 50);
	}

	animate('down');
}


//html5 Geolocation API
function displayLocationDetails(){
	var captureLocProps = function(locationProperties){
		var locDetails = document.getElementById("locDetails");
		locDetails.innerHTML = "Current location details - " + "<br/>";
		locDetails.append("Latitude : "+ locationProperties.coords.latitude);
		locDetails.append(document.createElement("br"));
		locDetails.append("Longitude : "+ locationProperties.coords.longitude);
		locDetails.append(document.createElement("br"));
		locDetails.append("Timestamp : "+ locationProperties.timestamp);

	}

	navigator.geolocation.getCurrentPosition(captureLocProps);	
}
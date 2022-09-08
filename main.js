img="";
status="";
objectDetector="";

function preload(){
	img=loadImage("ac.jpg");
}

function setup(){
	canvas=createCanvas(640,430);
	canvas.center();
	objectDetector=ml5.objectDetector("cocossd",modelLoaded);
	document.getElementById("status").innerHTML="Status: Detecting Objects";
}

function modelLoaded(){
	console.log("modelLoaded");
	status=true;
	objectDetector.detect(img,gotResult);
}

function gotResult(error,results){
     if(error){
     	console.log(error);
     }
     console.log(results);
}

function draw(){
	image(img,0,0,640,430);

	fill("#000000");
	text("Sofa",65,95);
	noFill("");
	stroke("#000000");
	rect(30,60,350,320);

	fill("#000000");
	text("setting pillow",390,120);
	noFill();
	stroke("#000000");
	rect(350,90,270,320);
}
//import { text } from "body-parser";

let mobilenet;
//let penquin;
let video;
let label = '';
let c;
let canvas;


function modelReady() {
    console.log('Model is ready!!!');
    mobilenet.predict(canvas, gotResult);
    //mobilenet.predict(gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error("error:" + error);
    }
    else {
        label = results[0].label;
        let confidence = results[0].confidence;
        console.log(results[0].label);
       
        //createP(label);
        //createP(confidence);
        mobilenet.predict(canvas, gotResult);
    }
}


function imageReady()
{
    image(penquin, 0, 0, width, height);
}


function setup() {
    c = color(25);
    canvas = createCanvas(640, 550);
    //penquin = createImg('images/penquin.jpg', imageReady);
    //video = createCapture(VIDEO);
    //video.hide();
    //penquin.hide();
    //background(0);
    mobilenet = ml5.imageClassifier('MobileNet', modelReady);
}

function mouseDragged() 
{ 

    stroke(c);
    strokeWeight(10)
    line(mouseX, mouseY, pmouseX, pmouseY);
    //modelReady();
}

function draw() {
    //background(0);
    //image(video, 0, 0);
    //fill(255);
    //textSize(32);
    //text(label, 10, height -20);
    console.log("draw");
    noStroke();
	fill(200);
	rect(0, 0, width, 25);
	fill(0);
	text(label, 10, height -20);
}

console.log('ml5 version:', ml5.version);
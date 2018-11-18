let video;
let model;
let classifier;
let label = 'Loading...';


function modelReady() {
  console.log('model ready');
  classifier.load('model.json', custoModelReady);

}

function custoModelReady(){
  console.log('CustoModel ready');
  classifier.classify(gotResult);
}

function videoReady() {
  console.log('video ready');

}

function setup() {
  createCanvas(600, 400);
  video = createCapture(VIDEO).hide(); //usa a webcam

  model = ml5.featureExtractor('MobileNet', modelReady);
  classifier = model.classification(video, videoReady);
  

}

function draw() {
	background(0);
  image(video, 0, 0, width, height-30);
  fill(255, 0, 0);
  noStroke();
  textSize(25);
  textAlign(CENTER);
  text(label, width / 2, height-5);
 
}


function gotResult(err, result) {
  if (err) {
    console.error(err);
  } else {
    //console.log(result);
    label = result;
    classifier.classify(gotResult);
  }
}
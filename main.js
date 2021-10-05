nosex=0;
nosey=0;
function preload() {
mustache=loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}
function setup() {
    canvas=createCanvas(375,375);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded);
posenet.on("pose",gotPoses);
}
function draw() {
image(video, 0, 0, 375, 375);
image(mustache,nosex,nosey,80,35);
}
function snapshot() {
    save("mustache.png");
}
function modelLoaded() {
    console.log("model is loaded");

}
function gotPoses(results) {
if(results.length>0) {
    console.log(results);
    console.log("nose x "+results[0].pose.nose.x);
    console.log("nose y "+results[0].pose.nose.y);
    nosex=results[0].pose.nose.x-155;
    nosey=results[0].pose.nose.y-50;
} 
}
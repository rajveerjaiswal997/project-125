noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristX = 0;
difference = 0;


function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(550.150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);

}

function modelLoaded(){
    console.log('pose net is initialized');
}

function gotPoses(results){
    if(results.length> 0 ){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = " + leftWristX + "rightWristX" + rightWristX + "difference" + difference);
    }
}

function draw(){
    background('#2efc2b');
    document.getElementById("square_side").innerHTML = "the size of the font is = " + difference + " px " ;
    text('rajveer',50,400);
    fill('#fc031c');
    textSize(difference);
}
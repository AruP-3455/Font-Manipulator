function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 550);
    canvas.position(600, 60);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}
function modelLoaded(){
    console.log("PoseNet is Initialized!");
}
function draw(){
    background("grey");
    }
    function gotPoses(results){
        if(results.legnth > 0 ){
            console.log(results);
        }
    }
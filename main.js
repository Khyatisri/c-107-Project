
function Start(){
    navigator.mediaDevices.getUserMedia({ audio: true});
Classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/tl_xgVtQK/model.json",modelReady);
}

function modelReady(){
classifier.classify(gotResult);
}

function gotResult(error,results) {
 console.log("gotResults");
}
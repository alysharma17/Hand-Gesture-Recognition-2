prediction="";



Webcam.set({
    width:340,
    height:280,
    image_format:'png',
    png_quality:8000
    
    });
    cam=document.getElementById("camera");
Webcam.attach("#camera");

function take_photo() {
    Webcam.snap(function(data_uri){
   image="<img id='img_phto' src='"+data_uri+"'>" ;
   document.getElementById("photo").innerHTML=image;
    });
}    

console.log("ml5 version ", ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/K2yvJYNBZ/model.json", model_loaded);

function model_loaded() {
    console.log("model_loaded");
}

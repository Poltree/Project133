res_array = []
picture=""
status="" 
perc = ""
function setup(){
canvas = createCanvas(700,450)
canvas.center()
cocossd_var = ml5.objectDetector('cocossd',modelloaded)
document.getElementById("status").innerHTML = "Detecting Objects"
}
function modelloaded(){
    console.log("THE MODEL IS LOADED")
    status = true
    cocossd_var.detect(picture,gotResults)
}
function gotResults(error,results){
if (error){
    console.log("error")

}
else{
    console.log(results)
    res_array = results;
}
}

function draw(){
image(picture,0,0,700,450)
if(status != ""){
    r = random(255)
    g = random(255)
    b = random(255)
for(var v=0; v < res_array.length; v++){
fill(r,g,b)
perc= floor(res_array[v].confidence*100)
text(res_array[v].label + " " + perc + "%" + " ", res_array[v].x + 10,res_array[v].y + 15)
noFill()
stroke(r,b,g)

rect(res_array[v].x,res_array[v].y,res_array[v].width,res_array[v].height)
document.getElementById("status").innerHTML = "Detected Objects"
}
}

}
function preload(){

picture = loadImage("Photo-1.jpeg")
}
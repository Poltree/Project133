res_array = []
picture=""
fin_status="" 
function setup(){
canvas = createCanvas(700,450)
canvas.center()
cocossd_var = ml5.objectDetector('cocossd',modelloaded)
}
function modelloaded(){
    console.log("THE MODEL IS LOADED")
    fin_status = true
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
for(var v=0; v < res_array.length; v++){
fill("#20C20E")
text(res_array[v].label,res_array[v].x + 10,res_array[v].y + 15)
noFill()
stroke("#20C20E")

rect(res_array[v].x,res_array[v].y,res_array[v].width,res_array[v].height)
}
}

}
function preload(){

picture = loadImage("clipboard.jpg")
}
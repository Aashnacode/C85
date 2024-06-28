canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

mars_array=["mars_image_1.jpg","mars_image_2.jpg","mars_image_3.jpg","mars_image_4.jpg"];

randomnumber=Math.floor(Math.random()*4);
console.log(randomnumber);



rover_width=100;
rover_height=90;

background_image=mars_array[randomnumber];
console.log("background image="+background_image);
rover_image="rover.png";

roverx=10;
rovery=10;



function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;

    rover_imgTag=new Image();
    rover_imgTag.onload=uploadRover;
    rover_imgTag.src=rover_image;
}
function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadRover(){
    ctx.drawImage(rover_imgTag,roverx,rovery,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=="38"){
        up();
        console.log("up");
    }
    if(keyPressed=="40"){
        down();
        console.log("down");
    }
    if(keyPressed=="37"){
        left();
        console.log("left");
    }
    if(keyPressed=="39"){
        right();
        console.log("right");
    }
}
function up(){
    if(rovery>=0){
        rovery=rovery-10;
        console.log("when up arrow key is pressed,x= "+roverx+",y= "+rovery);
        uploadBackground();
        uploadRover();
    }
}
function down(){
    if(rovery<=500){
        rovery=rovery+10;
        console.log("when down arrow key is pressed,x= "+roverx+",y= "+rovery);
        uploadBackground();
        uploadRover();
    }
}
function left(){
    if(roverx>=0){
        roverx=roverx-10;
        console.log("when left arrow key is pressed,x= "+roverx+",y= "+rovery);
        uploadBackground();
        uploadRover();
    }
}
function right(){
    if(roverx<=700){
        roverx=roverx+10;
        console.log("when right arrow key is pressed,x= "+roverx+",y= "+rovery);
        uploadBackground();
        uploadRover();
    }
}



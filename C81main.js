var canvas=document.getElementById("Mycanvas");
ctx=canvas.getContext("2d");
color="Blue";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(250,210,40,0,2*Math.PI);
ctx.stroke();

var canvas=document.getElementById("Mycanvas");
ctx=canvas.getContext("2d");
color="Black";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(250,210,40,0,2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",myMouseDown);

var canvas=document.getElementById("Mycanvas");
ctx=canvas.getContext("2d");
color="red";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(250,210,40,0,2*Math.PI);
ctx.stroke();

var canvas=document.getElementById("Mycanvas");
ctx=canvas.getContext("2d");
color="Yellow";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(250,210,40,0,2*Math.PI);
ctx.stroke();

var canvas=document.getElementById("Mycanvas");
ctx=canvas.getContext("2d");
color="Green";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(250,210,40,0,2*Math.PI);
ctx.stroke();

function circle(mousex,mousey){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=5;
    ctx.arc(mousex,mousey,40,0,2*Math.PI);
    ctx.stroke(); 
}

function myMouseDown(e){
    x=e.clientX-canvas.offsetLeft;
    y=e.clientY-canvas.offsetTop;
    circle(x,y);

}
canvas=document.getElementById("my_canvas");
colour="red";
ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle="purple";
ctx.lineWidth=5;
ctx.arc(190,300,100,0,360);
ctx.stroke();

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mousex=e.clientX-canvas.offsetLeft;
    mouseY=e.clientY-canvas.offsetTop;
console.log("x="+mousex+"  y="+mouseY);
circle(mousex,mouseY)
}
function circle(mousex,mouseY){
    ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=5;
ctx.arc(mousex,mouseY,100,0,360);
ctx.stroke();
}
canvas.addEventListener("mouseleave", myMouseLeave);
function myMouseleave(e)
{
    mouseEvent = "mouseLeave";
}

canvas.addEventListener("mouseup", myMouseUp)
function myMouseUp(e)
{
    mouseEvent = "mouseUP";
}

canvas.addEventListener("mousemove", myMouseMove);
function myMouseMove(e)
{
    positionMouseX = e.clientX - canvas.offsetleft
    positionMouseY = e.clientY - canvas.offsetTop
    if(mouseEvent == "mouseDown") {
        ctx.beginPath;
        ctx.strokeStyle = color;
        ctx.lineWidth = widthLine;

         console.log("Last position of a x and y coordinates = ");
         console.log("x = " + PositionMouseX + "y = " + lastPosition);
         ctx.moveTo(lastPositionX, lastPositionY)

         console.log("Curruent position of x and y coordinates = ");
         console.log("x = " + PositionMouseX + "y = " + positionMouseY)
         ctx.lineTo(PositionMouseX, positionMouseY);
         ctx.stroke();

    
}
lastPositionX = PositionMouseX;
lastPositionY = PositionMouseY;
}
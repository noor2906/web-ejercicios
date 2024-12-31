var canvas = document.getElementById("paint_canvas");
var context = canvas.getContext("2d");
var boundings = canvas.getBoundingClientRect();

// Specifications
var mouseX = 0;
var mouseY = 0;
context.strokeStyle = 'black'; // initial brush color
context.lineWidth = 1; // initial brush width
var isDrawing = false;

function setMouseCoordinates(event) {
    mouseX = event.clientX - boundings.left;
    mouseY = event.clientY - boundings.top;
}
canvas.addEventListener('mouseup', function (event) {
    setMouseCoordinates(event);
    isDrawing = false;
});
canvas.addEventListener('mousemove', function (event) {
    setMouseCoordinates(event);

    if (isDrawing) {
        context.lineTo(mouseX, mouseY);
        context.stroke();
    }
});
canvas.addEventListener('mousedown', function (event) {
    setMouseCoordinates(event);
    isDrawing = true;

    // Start Drawing
    context.beginPath();
    context.moveTo(mouseX, mouseY);
})
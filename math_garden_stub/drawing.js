const BACKGROUND_COLOUR = "#000000";
const LINE_COLOUR = '#FFF';
let currentX = 0;
let currentY = 0;
let previousX = 0;
let previousY = 0;
let context;
function prepareCanvas(){
     context = canvas.getContext('2d');
    let ispainting = false
    context.fillStyle = '#FFFFFFF';
    canvas.style.backgroundColor = BACKGROUND_COLOUR;
    context.strokeStyle = LINE_COLOUR;
    context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    context.lineWidth = 10;
    context.lineJoin = "round"
    document.addEventListener('mousedown', (event) => {
        // console.log("mousedown")
        currentX = event.clientX - canvas.offsetLeft;
        currentY = event.clientY - canvas.offsetTop;
        ispainting = true
    })
    document.addEventListener('touchstart', (event) => {
        // console.log("mousedown")
        currentX = event.touches[0].clientX - canvas.offsetLeft;
        currentY = event.touches[0].clientY - canvas.offsetTop;
        ispainting = true
    })
    document.addEventListener('mouseup', (event) => {
        // console.log("mouseup")
        ispainting = false
    })
    canvas.addEventListener('"mouseleave"', (event) => {
        // console.log("mouseleave")
        ispainting = false
    })
    canvas.addEventListener('touchend', (event) => {
        // console.log("mouseleave")
        ispainting = false
    })
    document.addEventListener('mousemove', (event) => {
        if (ispainting === true) {
            previousX = currentX;
            currentX = event.clientX - canvas.offsetLeft;
            previousY = currentY;
            currentY = event.clientY - canvas.offsetTop;
            // console.log(event);
            context.beginPath();
            context.moveTo(previousX, previousY);
            context.lineTo(currentX, currentY);
            context.stroke();
        }
    });
    document.addEventListener('touchmove', (event) => {
        if (ispainting === true) {
            previousX = currentX;
            previousY = currentY;
            currentX = event.touches[0].clientX - canvas.offsetLeft;
            currentY = event.touches[0].clientY - canvas.offsetTop;
            // console.log(event);
            context.beginPath();
            context.moveTo(previousX, previousY);
            context.lineTo(currentX, currentY);
            context.stroke();
        }
    });
}
function clearCanvas() {

     context = canvas.getContext('2d');
    currentX = 0;
    currentY = 0;
    previousX = 0;
    previousY = 0;
    context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
}

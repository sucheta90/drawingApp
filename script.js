const canvas = document.getElementById("canvas"); // Actual Canvas

canvas.width = window.innerWidth - canvas.offsetLeft;

canvas.height = window.innerHeight - canvas.offsetTop;

const ctx = canvas.getContext("2d"); // canvas context

const clearBtn = document.getElementById("clear-btn"); // clears canvas

const lineWidth = document.getElementById("line-width"); // line-width input

const colorSelector = document.getElementById("color-selector"); // color input

//Global Variables:
let isPainting = false;

canvas.addEventListener("mousemove", (e) => {
  if (!isPainting) {
    return;
  }
  ctx.strokeStyle = colorSelector.value;
  ctx.lineWidth = lineWidth.value;
  ctx.lineCap = "round";
  ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
  ctx.stroke();
});

// Function: Clear canvas

clearBtn.addEventListener("click", (e) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  isPainting = false;
});

// Function udpate color
colorSelector.addEventListener("change", (e) => {
  if (e.target.id === "color-selector") {
    ctx.strokeStyle = e.target.value;
  }
});

// Function update Line-Width
lineWidth.addEventListener("input", (e) => {
  if (e.target.id === "line-width") {
    ctx.lineWidth = e.target.value;
  }
});

canvas.addEventListener("mousedown", (e) => {
  isPainting = true;
  ctx.beginPath();
});

canvas.addEventListener("mouseup", (e) => {
  isPainting = false;
});
window.addEventListener("mouseup", (e) => {
  isPainting = false;
  ctx.beginPath();
});

// Function to stop drawing if the mouse moved outside of the canvas
canvas.addEventListener("blur", (e) => {
  isPainting = false;
  ctx.closePath();
});

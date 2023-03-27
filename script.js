console.log("==== Welcome to free-canvas, a toybox for playing with HTML5 canvas. ====");
const __defaultCode = `// Write your canvas code here;
var canvas = document.getElementById("freeCanvas");
var ctx = canvas.getContext("2d");

ctx.fillStyle='black';
ctx.fillRect(0, 0, 10, 10);
`;
function run() {
	var el = document.getElementById("codeEditor");
	var sandboxCode = el.value;
	var oldScript = document.getElementById("sandboxScript");
	if (oldScript) {
		oldScript.parentNode.removeChild(oldScript);
	}
	var script = document.createElement("script");
	script.id = "sandboxScript";
	script.type = "text/javascript";
	script.text = sandboxCode;
	document.body.appendChild(script);
}

function reset() {
	var el = document.getElementById("codeEditor");
	el.value = __defaultCode;
}

function clearCanvas() {
	var ctx = canvas.getContext("2d");
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

const runButton = document.getElementById("runButton");
runButton.addEventListener("click", run);
const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", reset);
const clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", clearCanvas);
reset();


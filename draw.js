const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 10;

const rows = canvas.height / scale;
const columns = canvas.width / scale;

var snake;

(function setup(){
	snake = new Snake();
	window.setInterval(() => {
		snake.update();
		snake.draw();
	}, 250);
}())

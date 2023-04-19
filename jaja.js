const canvas = document.getElementById('gameField');
const ctx = canvas.getContext('2d');

const direction = {
	up: "ArrowUp",
	down: "ArrowDown",
	right: "ArrowRight",
	left: "ArrowLeft"
}

let foodX = Math.floor((Math.random() * 30 + 1)) * 20;
let foodY = Math.floor((Math.random() * 30 + 1)) * 20;

let x = 360;
let y = 300;
const box = 20;

let snake = [];
let currentDirection;
document.addEventListener('keydown', function(event) {
	setTimeout(() => { eval(res)}, 100);
  if (event.code == direction.down && currentDirection != direction.up) {
    currentDirection = direction.down;
  }
  else if (event.code == direction.up && currentDirection != direction.down) {
    currentDirection = direction.up;
  }
  else if (event.code == direction.left && currentDirection != direction.right) {
    currentDirection = direction.left;
  }
  else if (event.code == direction.right && currentDirection != direction.left) {
    currentDirection =  direction.right;
  }
});

function move() {
  if (currentDirection == direction.down) y+=box;
  if (currentDirection ==  direction.up)  y-=box;
  if (currentDirection == direction.left) x-=box;
  if (currentDirection == direction.right)x+=box;
	if (x > 680) {
		x = 0;
		y+=box;
	}
	else if (x < 0) {
		x = 680;
		y-=box;
	}
	else if (y > 680) {
		y = 0;
		x+=box;
	}
	else if (y < 0) {
		y = 680;
		x-=box;
	}
};

setTimeout(() => { // initial position of the snake
	snake.unshift({x: x-box*2, y: y});
	snake.unshift({x: x-box, y: y});
	snake.unshift({x: x, y: y});
	drawSnake()
}, 100);

function drawFood(){
	ctx.fillStyle = 'red';
	ctx.fillRect(foodX, foodX, box, box);
}

function eatFood(){
	if (snake[0].x == foodX && snake[0].y == foodY) {
		console.log('eat');
			snake.unshift({x: x, y: y});
			foodX = Math.floor((Math.random() * 30 + 1)) * 20;
			foodY = Math.floor((Math.random() * 30 + 1)) * 20;
	}
}

function drawSnake(){
	ctx.fillStyle = "grey";
	ctx.fillRect(0,0,canvas.width, canvas.height);
	snake.forEach((item, i) => {
						eatFood();
		ctx.fillStyle = i == 0 ? 'green' : 'lightgreen';
		ctx.fillRect(item.x, item.y, box, box);
	});
	drawFood();
}


setInterval(function() {
			move();
			snake.unshift({x: x, y: y});
			snake.pop();
		}, 200);

let res =	'setInterval(drawSnake, 100)';

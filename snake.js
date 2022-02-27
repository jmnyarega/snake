class Snake {
  direction = "right";
  length = 1;
  height = 10;
  x = 0;
  y = 0;
  width = 10;
  id = "snake";
  background = "#8BE9FD";
  target = null;
  snake = null;
  intersect = false;

  constructor() {
    const target = new Target();
    target.draw();
    this.target = target;
  }

  getKey = () => {
    return this.key;
  };

  draw = () => {
    const dom = new Dom();

    this.snake = dom.snake({
      height: this.height,
      width: this.width,
      length: this.length,
      id: this.id,
      background: this.background,
      x: this.x,
      y: this.y,
    });
  };

  moveUp = () => {
    this.direction = "up";

    let padY = this.y - 10;
    this.y = padY <= 0 ? 290 : padY;

    this.draw();
    this.eatFood();
    this.grow();
  };
  moveDown = () => {
    this.direction = "down";

    let padY = (10 + this.y) % 300;
    this.y = padY;

    this.draw();
    this.eatFood();
    this.grow();
  };
  moveRight = () => {
    this.direction = "right";

    let padX = (10 + this.x) % 300;
    this.x = padX;

    this.draw();
    this.eatFood();
    this.grow();
  };
  moveLeft = () => {
    this.direction = "left";

    let padX = this.x - 10;
    this.x = padX <= 0 ? 290 : padX;

    this.draw();
    this.eatFood();
    this.grow();
  };

  eatFood() {
    const { x: targetX, y: targetY } = this.target.dom.getBoundingClientRect();
    const { x: snakeX, y: snakeY } = this.snake.getBoundingClientRect();
    this.intersect = targetY === snakeY && targetX === snakeX;
  }
  grow() {
    if (this.intersect) {
      this.width += 2;

      this.target.draw();
    }
  }
}

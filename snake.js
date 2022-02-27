class Snake {
  direction = "right";
  length = 1;
  height = 10;
  x = 0;
  y = 0;
  width = 10;
  id = "snake";
  background = "#8BE9FD";

  draw = () => {
    const dom = new Dom();
    dom.snake({
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
  };
  moveDown = () => {
    this.direction = "down";

    let padY = (10 + this.y) % 300;
    this.y = padY;

    this.draw();
  };
  moveRight = () => {
    this.direction = "right";

    let padX = (10 + this.x) % 300;
    this.x = padX;

    this.draw();
  };
  moveLeft = () => {
    this.direction = "left";

    let padX = this.x - 10;
    this.x = padX <= 0 ? 290 : padX;

    this.draw();
  };

  hitTarget() {}
  grow() {}
}

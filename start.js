class Start {
  draw = () => {
    const win = new Swindow();
    const snake = new Snake();

    snake.draw();
    win.draw();
    win.addListeners(
      snake.moveRight,
      snake.moveUp,
      snake.moveLeft,
      snake.moveDown
    );
  };
}

const start = new Start();
start.draw();

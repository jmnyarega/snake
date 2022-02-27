class Start {
  draw = () => {
    const win = new Swindow();
    const snake = new Snake();
    const target = new Target();

    snake.draw();
    win.draw();
    win.addListeners(
      snake.moveRight,
      snake.moveUp,
      snake.moveLeft,
      snake.moveDown
    );
    target.draw();
  };
}

const start = new Start();
start.draw();

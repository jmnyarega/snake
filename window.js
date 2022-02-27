class Swindow {
  width = 300;
  height = 300;
  background = "#282A36";
  id = "window";
  window = {};

  draw = () => {
    const dom = new Dom();

    const doc = dom.window({
      height: this.height,
      width: this.width,
      id: this.id,
      background: this.background,
    });

    this.window = doc;
  };

  addListeners = (moveRight, moveUp, moveLeft, moveDown) => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowUp") moveUp();
      if (e.key === "ArrowDown") moveDown();
      if (e.key === "ArrowLeft") moveLeft();
      if (e.key === "ArrowRight") moveRight();
    });
  };
}

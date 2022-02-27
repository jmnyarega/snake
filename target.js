class Target {
  width = 10;
  height = 10;
  x = Math.random() * 280;
  y = Math.random() * 280;
  id = "target";
  background = "#FF79C6";

  draw = () => {
    const dom = new Dom();
    dom.target({
      height: this.height,
      width: this.width,
      id: this.id,
      background: this.background,
      x: this.x,
      y: this.y,
    });
  };
}

class Target {
  width = 10;
  height = 10;
  x = Math.random() * 280;
  y = Math.random() * 280;
  id = "target";
  background = "#FF79C6";

  draw = () => {
    const dom = new Dom();
    if (this.x % 10 > 0 && this.x > 10)
      this.x = Math.floor((this.x /= 10)) * 10;
    if (this.y % 10 > 0 && this.y > 10)
      this.y = Math.floor((this.y /= 10)) * 10;

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

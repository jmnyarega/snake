class Target {
  width = 10;
  height = 10;
  x = 10;
  y = 10;
  id = "target";
  background = "#FF79C6";

  dom = {};

  draw = () => {
    const dom = new Dom();

    this.x = Math.random() * 280;
    this.y = Math.random() * 280;

    if (this.x % 10 > 0 && this.x > 10)
      this.x = Math.floor((this.x /= 10)) * 10;
    else this.x = 10;

    if (this.y % 10 > 0 && this.y > 10)
      this.y = Math.floor((this.y /= 10)) * 10;
    else this.y = 10;

    this.dom = dom.target({
      height: this.height,
      width: this.width,
      id: this.id,
      background: this.background,
      x: this.x,
      y: this.y,
    });
  };
}

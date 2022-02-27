class Dom {
  window = ({ width, height, background, id }) => {
    const doc = document.getElementById(id);
    doc.style.width = `${width}px`;
    doc.style.backgroundColor = background;
    doc.style.height = `${height}px`;

    return doc;
  };

  snake = ({ x, y, width, height, id, background }) => {
    const doc = document.getElementById(id);
    doc.style.position = "absolute";
    doc.style.backgroundColor = background;
    doc.style.width = `${width}px`;
    doc.style.height = `${height}px`;
    doc.style.top = `${Math.abs(y)}px`;
    doc.style.left = `${Math.abs(x)}px`;
    doc.style.overflow = `hidden`;

    return doc;
  };

  target = ({ x, y, width, height, id, background }) => {
    const doc = document.getElementById(id);
    doc.style.position = "absolute";
    doc.style.backgroundColor = background;
    doc.style.width = `${width}px`;
    doc.style.height = `${height}px`;
    doc.style.top = `${Math.abs(y)}px`;
    doc.style.left = `${Math.abs(x)}px`;
    doc.style.borderRadius = `50%`;
    doc.style.overflow = `hidden`;

    return doc;
  };
}

import { useState } from "react";

const Game = ({ size }) => {
  const [food, setFood] = useState([0, 0]);
  const [snake, setSnake] = useState([
    [1, 2],
    [1, 3],
    [1, 4],
  ]);
  const [status, setStatus] = useState(0);
  const [direction, setDirection] = useState("right");

  const gridSize = Array(size).fill(1);

  return (
    <div style={styles.grid(size)}>
      {gridSize.map((_, x) =>
        gridSize.map((_, y) => {
          const isFood = x === food[0] && y === food[1];
          const isSnake = snake.some((s) => x === s[0] && y === s[1]);
          return <div style={styles.gridCell(isFood, isSnake)} key={y} />;
        })
      )}
    </div>
  );
};

const styles = {
  grid: (size) => ({
    display: "grid",
    width: size * 30,
    gridTemplateColumns: `repeat(${size}, auto)`,
  }),
  gridCell: (isFood, isSnake) => ({
    outline: "1px solid teal",
    height: "2.5rem",
    width: "2.5rem",
    backgroundColor: isFood ? "rebeccapurple" : isSnake ? "blue" : "",
  }),
};

export default Game;

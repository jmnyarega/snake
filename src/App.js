import Game from "./pages/game";

const App = () => {
  return (
    <div style={styles.container}>
      <Game size={10} />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
  },
};

export default App;

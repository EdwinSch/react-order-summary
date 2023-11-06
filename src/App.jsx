import illustration from "./assets/illustration-hero.svg";
import Title from "./components/Title";

function App() {
  return (
    <main>
      <img src={illustration} alt="illustration" className="illustration" />
      <div className="main-content">
        <Title text={"order summary"} />
      </div>
    </main>
  );
}

export default App;

import illustration from "./assets/illustration-hero.svg";
import Title from "./components/Title";
import Plans from "./components/Plans";
import Buttons from "./components/Buttons";

function App() {
  return (
    <main>
      <img src={illustration} alt="illustration" className="illustration" />
      <div className="main-content">
        <Title text={"order summary"} />
        <Plans />
        <Buttons />
      </div>
    </main>
  );
}

export default App;

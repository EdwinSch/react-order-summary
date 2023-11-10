import Hero from "./components/Hero";
import Text from "./components/Text";
import Plan from "./components/Plan";
import Buttons from "./components/Buttons";

function App() {
  return (
    <main>
      <Hero />
      <div className="main-content">
        <h1>order summary</h1>
        <Text />
        <Plan />
        <Buttons />
      </div>
    </main>
  );
}

export default App;

import "./App.css";
import { useToggle } from "./components/useToggle";
function App() {
  const {state: isVisible, toggle: toggleIsVisible} = useToggle();
  return (
    <div className="App">
      <button onClick={toggleIsVisible}>
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && <h1> Hidden Text </h1>}
    </div>
  );
}



export default App;

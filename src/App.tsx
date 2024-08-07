import "./index.css";
import Title from "./Components/Title/Title";
import Model from "./Components/Model";
import Scroll_Arrow from "./Components/Scroll_Arrow";
import Seawaves from "./Components/Seawaves";

function App() {
  return (
    <div className="master-section">
      <div className="welcoming-section">
        <div className="upper-section">
          <Title></Title>
          <Model></Model>
        </div>
        <div className="bottom-section">
          <Scroll_Arrow></Scroll_Arrow>
          <Seawaves></Seawaves>
        </div>
      </div>
    </div>
  );
}

export default App;

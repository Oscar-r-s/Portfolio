import Nav from "./Components/Nav";
import Title from "./Components/Title";
import Intro from "./Components/Intro";

function App() {
  return (
    <div className="master-section">
      <div className="welcome-section">
        <Nav></Nav>
        <Title></Title>
        <Intro></Intro>
      </div>
    </div>
  );
}

export default App;

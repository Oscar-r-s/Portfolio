import Nav from "../Components/Nav";
import Title from "../Components/Title";
import Subtitle from "../Components/Subtitle";
import Scrol_Indicator from "../Components/Scrol_Indicator";

function App() {
  return (
    <div id="master-section">
      <div id="welcome-section">
        <Nav></Nav>
        <Title></Title>
        <div className="intro-container">
          <Subtitle text="Hey ! I'm Oscar — student during the day, web developer by passion"></Subtitle>
          <Scrol_Indicator />
        </div>
      </div>
    </div>
  );
}

export default App;

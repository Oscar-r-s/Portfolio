type Props = {};

function Intro({}: Props) {
  return (
    <div className="intro-container">
      <div className="intro">
        <p>
          Hey ! I'm Oscar — student during the day, web developer by passion
        </p>
      </div>
      <div className="scroll-indicator">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Intro;

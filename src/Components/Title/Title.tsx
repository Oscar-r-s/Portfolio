import Eyeball from "./Eyeball";

type Props = {};

const Title = ({}: Props) => {
  return (
    <div className="title-container">
      <div className="title-name">
        <div className="eye">
          <Eyeball></Eyeball>
        </div>
        <div className="name">SCAR</div>
      </div>
      <div className="title-last-name">
        <div className="last-name">RODRIGUEZ</div>
      </div>
    </div>
  );
};

export default Title;

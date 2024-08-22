type Props = {
  text: string;
};

export default function Subtitle({ text }: Props) {
  return (
    <div className="subtitle-container">
      <div className="subtitle">
        <p>{text}</p>
      </div>
    </div>
  );
}

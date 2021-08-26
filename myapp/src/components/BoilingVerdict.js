export default function BoilingVerdict(props) {
  const { temp = 0 } = props;

  if (temp >= 100) {
    return <p>The Water would boil</p>;
  } else {
    return <p>Water would not boil</p>;
  }
}

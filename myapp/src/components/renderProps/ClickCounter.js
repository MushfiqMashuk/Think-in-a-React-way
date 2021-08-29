export default function ClickCounter({ count, incrementCount }) {
  return <button onClick={incrementCount}>Clicked {count} times</button>;
}

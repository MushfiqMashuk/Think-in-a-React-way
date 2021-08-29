import HoverCounter from "../renderProps/HoverCounter";
import Counter from "./Counter";

export default function Content() {
  return (
    <div>
      <h1>This is a Content</h1>
      <Counter>
        {(count, incrementCount) => (
          <HoverCounter count={count} incrementCount={incrementCount} />
        )}
      </Counter>
    </div>
  );
}

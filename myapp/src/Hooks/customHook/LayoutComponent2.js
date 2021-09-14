import useWindowWidth from "./useWindowWidth";

export default function LayoutComponent() {
    
const onSmallSize = useWindowWidth(700);

  return (
    <div className={onSmallSize ? "small" : "large"}>
      <h1>This is another component</h1>
    </div>
  );
}

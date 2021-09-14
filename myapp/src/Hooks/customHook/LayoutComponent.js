import useWindowWidth from "./useWindowWidth";

export default function LayoutComponent() {
  const onSmallSize = useWindowWidth(768);

  return (
    <div>
      <h1>You are browsing in a {onSmallSize ? "small" : "large"} device</h1>
    </div>
  );
}

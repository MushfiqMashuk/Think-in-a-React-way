import { useCallback, useEffect, useState } from "react";

const useWindowWidth = (screenSize) => {
  console.log("Called on state change");
  const [onSmallSize, setOnSmallSize] = useState(false);

//   const checkWindowSize = () => {
//     console.log("Called on window resize");
//     setOnSmallSize(window.innerWidth < screenSize);
//   };

const checkWindowSize = useCallback(() => {
  console.log("Called on window resize");
  setOnSmallSize(window.innerWidth < screenSize);
}, [screenSize]);

  useEffect(() => {
    window.addEventListener("resize", checkWindowSize);

    return () => window.removeEventListener("resize", checkWindowSize);
  }, [checkWindowSize]);

  return onSmallSize;
};

export default useWindowWidth;

import { useState, useEffect } from "react";

export default function useScreenWidth() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleScreenWidthResize() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleScreenWidthResize);

    return () => {
      window.removeEventListener("resize", handleScreenWidthResize);
    };
  }, []);

  let device = "mobile";
  if (screenWidth > 800) {
    device = "tablet";
  }
  if (screenWidth > 1200) {
    device = "desktop";
  }

  return device;
}

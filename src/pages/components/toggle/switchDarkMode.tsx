import { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";
import animationData from "./toggle-sunmoon.json";
import { useTheme } from 'next-themes';

export default function SwitchMode() {
  const lottieContainer = useRef<HTMLDivElement>(null);
  const { resolvedTheme, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(resolvedTheme === 'dark');

  useEffect(() => {

    const container = lottieContainer.current as HTMLDivElement;

    const animation = lottie.loadAnimation({
      container: container!,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData
    });

    if (isDarkMode) {
        animation.playSegments([0, 12], true);
        setTheme('dark')
    } else {
        animation.playSegments([12, 28], true);
        setTheme('light')
    }

    const toggleSwitch = () => {
      setIsDarkMode(!isDarkMode);

      if (isDarkMode) {
        animation.playSegments([0, 12], true);
        setTheme('dark')
      } else {
        animation.playSegments([12, 28], true);
        setTheme('light')
      }
    };

    container?.addEventListener("click", toggleSwitch);

    return () => {
      container.removeEventListener("click", toggleSwitch);
      animation.destroy();
    };
  }, [isDarkMode]);

  return (
    <label className="switch">
      <span className="slider round">
        <div id="lottie-container" ref={lottieContainer} >
          <input type="checkbox" id="switch-toggle" className="switch-toggle__checkbox" />
        </div>
      </span>
    </label>
  );
}
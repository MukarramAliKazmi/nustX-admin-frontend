import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";

const ToggleThemeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
    >
      {theme === "dark" ? (
        <BsMoonStarsFill className="w-6 h-6 fill-sky-500" />
      ) : (
        <BsSunFill className="w-6 h-6 fill-sky-500" />
      )}
    </button>
  );
};

export default ToggleThemeButton;

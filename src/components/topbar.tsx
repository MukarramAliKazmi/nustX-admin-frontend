import { useTheme } from "next-themes";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import { useState, useEffect } from "react";

const Topbar = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex h-20 items-center justify-between px-6">
      <div className="flex items-center text-5xl font-bold text-sky-500">
        nustX
      </div>
      <button
        onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      >
        {theme === "dark" ? (
          <BsMoonStarsFill className="w-6 h-6 fill-sky-500" />
        ) : (
          <BsSunFill className="w-6 h-6 fill-sky-500" />
        )}
      </button>
    </div>
  );
};

export default Topbar;

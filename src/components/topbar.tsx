import { useTheme } from "next-themes";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import { RootState, useAppDispatch, useAppSelector } from "@/store/store";
import { toggleSidebar } from "@/store/slices/sidebarSlice";

const Topbar = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state: RootState) => state.sidebar.isOpen);

  const handleIsOpen = () => {
    dispatch(toggleSidebar());
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex h-20 items-center justify-between px-4 md:px-6">
      <div className="flex items-center text-5xl font-bold text-sky-500">
        nustX
      </div>
      <div className="flex gap-4 items-center">
        <button
          onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
        >
          {theme === "dark" ? (
            <BsMoonStarsFill className="w-6 h-6 fill-sky-500" />
          ) : (
            <BsSunFill className="w-6 h-6 fill-sky-500" />
          )}
        </button>
        <div className={`flex flex-col cursor-pointer relative w-6 h-4 md:hidden ${ isOpen ? "-gap-2" : "gap-1.5"}`} onClick={handleIsOpen}>
          <div className={`w-full h-1 bg-sky-500 rounded-full absolute transition-all duration-500 ${ isOpen ? "rotate-45 top-1.5" : "top-0"}`} />
          <div className={`w-full h-1 bg-sky-500 rounded-full absolute transition-all duration-500 ${ isOpen ? "-rotate-45 bottom-1.5": "bottom-0"}`} />
        </div>
      </div>
    </div>
  );
};

export default Topbar;

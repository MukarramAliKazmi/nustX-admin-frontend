import ToggleSidebarButton from "@/components/toggle-sidebar-button";
import ToggleThemeButton from "@/components/toggle-theme-button";

const Topbar = () => {
  return (
    <div className="w-full h-20 flex items-center justify-between px-4 md:px-6">
      <div className="text-5xl font-bold text-sky-500">nustX</div>
      <div className="flex items-center gap-4">
        <ToggleThemeButton />
        <ToggleSidebarButton />
      </div>
    </div>
  );
};

export default Topbar;

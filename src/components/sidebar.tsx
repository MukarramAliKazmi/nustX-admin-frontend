import { RootState, useAppSelector } from "@/store/store";
import SidebarItem from "@/components/sidebar-item";
import LogoutButton from "@/components/logout-button";

const Sidebar = () => {
  const isOpen = useAppSelector((state: RootState) => state.sidebar.isOpen);

  return (
    <div
      className={`flex flex-col w-64 px-4 py-6 md:px-6 md:py-8 bg-inherit transition-[border,transform] duration-500 -translate-x-full md:translate-x-0 absolute md:relative h-[calc(100vh-5rem)] md:h-full border-r border-gray-200 dark:border-gray-800 md:border-none ${
        isOpen && "translate-x-0"
      }`}
    >
      <SidebarItem title="Dashboard" route="/" />
      <SidebarItem title="Students" route="/students" />
      <SidebarItem title="Teachers" route="/teachers" />
      <SidebarItem title="Courses" route="/courses" />
      <SidebarItem title="Disciplines" route="/disciplines" />
      <div className="flex-1" />
      <LogoutButton />
      <div className={`w-6 h-6 absolute border-l border-t border-white dark:border-slate-950 transition-[border] duration-500 ml-[239px] -mt-6 md:hidden`} />
      <div className="w-6 h-6 absolute border-l border-t ml-[239px] -mt-6 border-gray-200 transition-[border] duration-500 dark:border-gray-800 rounded-tl-full md:hidden" />
    </div>
  );
};

export default Sidebar;

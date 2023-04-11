import SidebarItem from "@/components/sidebar-item";
import LogoutButton from "@/components/logout-button";

const Sidebar = () => {
  return (
    <div className="flex flex-col w-64 px-8 py-8">
      <SidebarItem title="Students" route="/students" />
      <SidebarItem title="Teachers" route="/teachers" />
      <SidebarItem title="Courses" route="/courses" />
      <SidebarItem title="Disciplines" route="/disciplines" />
      <div className="flex-1" />
      <LogoutButton />
    </div>
  );
};

export default Sidebar;

import SidebarItem from "@/components/sidebar-item";
import LogoutButton from "@/components/logout-button";

const sidebarItems = [
  {
    title: "Students",
    route: "/students",
  },
  {
    title: "Teachers",
    route: "/teachers",
  },
  {
    title: "Disciplines",
    route: "/disciplines",
  },
  {
    title: "Courses",
    route: "/courses",
  },
];

const Sidebar = () => {
  return (
    <div className="flex flex-col w-64 bg-white px-8 py-8">
      {sidebarItems.map((item, index) => (
        <SidebarItem key={index} item={item} />
      ))}
      <div className="flex-1" />
      <LogoutButton />
    </div>
  );
};

export default Sidebar;

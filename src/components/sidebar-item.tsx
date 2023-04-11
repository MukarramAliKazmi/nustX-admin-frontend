import Link from "next/link";

interface SidebarItem {
  title: string;
  route: string;
}

const SidebarItem = ({ title, route }: SidebarItem) => {
  return (
    <Link
      href={route}
      className="flex items-center p-4 text-gray-800  border-l-2 border-gray-200 hover:border-gray-400 hover:text-black"
    >
      {title}
    </Link>
  );
};

export default SidebarItem;

import Link from "next/link";

export interface SidebarItem {
  title: string;
  route: string;
}

interface SidebarItemProps {
  item: SidebarItem;
}

const SidebarItem = ({ item }: SidebarItemProps) => {
  return (
    <Link
      href={item.route}
      className="flex items-center p-4 text-gray-800  border-l-2 border-gray-200 hover:border-gray-400 hover:text-black "
    >
      {item.title}
    </Link>
  );
};

export default SidebarItem;

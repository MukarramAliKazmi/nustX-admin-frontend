import Link from "next/link";
import { useRouter } from "next/router";

interface SidebarItem {
  title: string;
  route: string;
}

const SidebarItem = ({ title, route }: SidebarItem) => {
  const router = useRouter();
  return (
    <Link
      href={route}
      className={`flex items-center p-4 text-gray-800 border-l-2 ${
        router.pathname === route ? "text-sky-600 border-sky-600" : "border-gray-200 hover:border-gray-400 hover:text-black"
      }`}
    >
      {title}
    </Link>
  );
};

export default SidebarItem;

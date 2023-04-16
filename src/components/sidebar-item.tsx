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
      className={`flex items-center p-4 border-l-2 transition-[border,_padding] duration-500 md:hover:pl-6 md:hover:border-l-4 ${
        router.pathname === route
          ? "text-sky-500 border-sky-500 pl-6 border-l-4 font-semibold"
          : "border-gray-200 hover:border-gray-300 dark:border-gray-800 dark:hover:border-gray-500"
      }`}
    >
      {title}
    </Link>
  );
};

export default SidebarItem;

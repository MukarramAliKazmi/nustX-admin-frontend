import Link from "next/link";
import { useRouter } from "next/router";

interface SidebarItemProps {
  title: string;
  route: string;
}

const SidebarItem = ({ title, route }: SidebarItemProps) => {
  const router = useRouter();
  return (
    <Link
      href={route}
      className={`p-4 md:hover:pl-6 border-l-2 md:hover:border-l-4 transition-[border,_padding] duration-500 ${
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

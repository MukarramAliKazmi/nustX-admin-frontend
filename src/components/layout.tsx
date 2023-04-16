import { RootState, useAppSelector } from "@/store/store";
import Sidebar from "@/components/sidebar";
import Topbar from "@/components/topbar";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const isOpen = useAppSelector((state: RootState) => state.sidebar.isOpen);

  return (
    <div className="flex flex-col h-screen bg-white dark:bg-slate-950 duration-500 transition-colors">
      <Topbar />
      <div className="flex flex-1 relative bg-inherit">
        <Sidebar />
        <div className={`h-[calc(100vh-5rem)] overflow-y-auto overflow-x-hidden p-4 md:p-6 border-t border-gray-200 dark:border-gray-800 duration-500 transition-[border] w-full md:border-l md:w-screen md:rounded-tl-3xl ${isOpen ? "w-screen": "" }`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;

import Sidebar from "@/components/sidebar";
import Topbar from "@/components/topbar";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col h-screen bg-white dark:bg-slate-950">
      <Topbar />
      <div className="flex flex-1">
        <Sidebar />
        <div className="h-[calc(100vh-5rem)] w-full overflow-y-auto overflow-x-hidden p-6 border-l border-t rounded-tl-3xl border-gray-200 dark:border-gray-800">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;

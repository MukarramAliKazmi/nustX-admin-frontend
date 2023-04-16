import Sidebar from "@/components/sidebar";
import Topbar from "@/components/topbar";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="w-screen h-screen flex flex-col bg-white dark:bg-slate-950 transition-colors duration-500">
      <Topbar />
      <div className="w-full h-full flex grid-cols-[auto_auto] relative bg-inherit overflow-x-hidden">
        <Sidebar />
        <div
          className={`w-full md:w-screen h-full relative overflow-y-auto p-4 md:p-6`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;

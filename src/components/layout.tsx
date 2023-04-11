import Sidebar from "@/components/sidebar";
import Topbar from "@/components/topbar";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col h-screen">
      <Topbar />
      <div className="flex flex-1">
        <Sidebar />
        <div className="h-full w-full overflow-y-auto bg-white p-6 border-l border-t rounded-tl-3xl">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;

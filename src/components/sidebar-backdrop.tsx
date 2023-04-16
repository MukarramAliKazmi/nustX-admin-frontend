import { RootState, useAppDispatch, useAppSelector } from "@/store/store";
import { toggleSidebar } from "@/store/slices/sidebarSlice";

const SidebarBackdrop = () => {
  const isOpen = useAppSelector((state: RootState) => state.sidebar.isOpen);
  const dispatch = useAppDispatch();

  const handleIsOpen = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div
      className={`w-screen h-full absolute left-full top-0 pointer-events-none md:pointer-events-none md:backdrop-blur-none transition-[backdrop-filter,border-color] duration-500 z-20 border-l border-t border-gray-200 dark:border-gray-800 rounded-tl-3xl ${
        isOpen && "pointer-events-auto backdrop-blur-sm"
      }`}
      onClick={handleIsOpen}
    />
  );
};

export default SidebarBackdrop;

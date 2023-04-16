import { IoLogOutOutline } from "react-icons/io5";

const LogoutButton = () => {
  return (
    <button className="flex items-center gap-2 w-full font-semibold text-sky-500 md:hover:gap-4 duration-500 transition-[gap]">
      Logout
      <IoLogOutOutline className="w-6 h-6 fill-sky-500 " />
    </button>
  );
};

export default LogoutButton;

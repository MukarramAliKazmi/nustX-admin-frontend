import { IoLogOutOutline } from "react-icons/io5";

const LogoutButton = () => {
  return (
    <button className="flex items-center gap-2 w-full font-semibold text-sky-500 hover:gap-4 transition-all">
      Logout
      <IoLogOutOutline className="w-6 h-6 fill-sky-500 " />
    </button>
  );
};

export default LogoutButton;

const LogoutButton = () => {
  return (
    <button
      className="flex items-center w-full font-semibold text-sky-600"
      onClick={() => alert("Logout")}
    >
      Logout
    </button>
  );
};

export default LogoutButton;

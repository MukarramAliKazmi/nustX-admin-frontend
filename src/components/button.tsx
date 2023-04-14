import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ ...rest }) => {
  return (
    <button
      {...rest}
      className={` w-full rounded-lg text-white p-4 outline-none bg-sky-500 focus:border-sky-500 hover:bg-sky-600 ${rest.className}`}
    >
      {rest.children}
    </button>
  );
};

export default Button;

import React from "react";
import useInputEvents from "@/hooks/handle-input-events";

type InputProps = React.HTMLProps<HTMLInputElement> & {
  label?: string;
};

const Input = ({ label, ...rest }: InputProps) => {
  const { value, focus, handleChange, handleFocus, handleBlue } =
    useInputEvents(rest);

  const labelPosition = focus || value ? "top-1" : "top-4";

  return (
    <div className="relative">
      <input
        {...rest}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlue}
        className={`border border-gray-200 dark:border-gray-800 w-full rounded-lg px-4 py-2 pt-6 outline-none bg-transparent focus:border-sky-500 ${rest.className}`}
      />
      <label
        htmlFor={rest.id}
        className={`absolute left-3  px-1 text-sky-500 transition-all ${labelPosition}`}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;

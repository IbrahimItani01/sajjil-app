import React from "react";

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	error?: string;
}

const CustomInput = ({ label, className, ...rest }: CustomInputProps) => {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="font-inter">{label}</label>}
      <input
        className={`border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent text-black font-inter ${className}`}
        {...rest}
      />
    </div>
  );
};

export default CustomInput;

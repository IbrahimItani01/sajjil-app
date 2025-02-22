import React from "react";

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	error?: string;
}

const CustomInput = ({ label, className, ...rest }: CustomInputProps) => {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="font-inter">{label}</label>}
    </div>
  );
};

export default CustomInput;

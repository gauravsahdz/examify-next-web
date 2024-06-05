"use client";
import React from "react";

type ButtonProps = {
  btnText: string;
  variant?: "primary" | "outline" | "secondary";
  btnStyle?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  handleClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  btnText,
  variant = "primary",
  btnStyle,
  leftIcon,
  rightIcon,
  handleClick,
}) => {
  const getButtonClasses = (variant: string) => {
    switch (variant) {
      case "primary":
        return "bg-brand-primary hover:bg-blue-700 text-white py-2 px-4 rounded shadow";
      case "outline":
        return "bg-transparent hover:bg-brand-secondary text-blue-700 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded";
      case "secondary":
        return "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded shadow";
      default:
        return "bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded shadow"; // Fallback style
    }
  };

  return (
    <button
      className={`flex flex-row justify-center items-center ${getButtonClasses(
        variant
      )} ${btnStyle}`}
      onClick={handleClick}
    >
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {btnText}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

export default Button;

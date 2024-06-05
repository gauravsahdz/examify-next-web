"use client";
import React, { useState } from "react";

interface ToggleSwitchProps {
  isOn: boolean;
  onToggle: (isOn: boolean) => void;
  disabled?: boolean;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  isOn,
  onToggle,
  disabled = false,
}) => {
  const handleToggle = () => {
    if (!disabled) {
      onToggle(!isOn);
    }
  };

  return (
    <div className="flex items-center">
      <div
        onClick={handleToggle}
        className={`relative inline-block w-8 h-4 transition duration-200 ease-linear rounded-full cursor-pointer ${
          disabled ? "cursor-not-allowed opacity-50" : ""
        } ${isOn ? "bg-green-400" : "bg-gray-400"}`}
      >
        <span
          className={`absolute left-0 inline-block w-4 h-4 transition-transform duration-200 ease-linear transform bg-white rounded-full shadow ${
            isOn ? "translate-x-4" : "translate-x-0"
          }`}
        ></span>
      </div>
    </div>
  );
};

export default ToggleSwitch;

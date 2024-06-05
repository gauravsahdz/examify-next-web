import React from "react";

type StatsCardProps = {
  value: number | string;
  description: string;
  icon?: React.ReactNode;
};

const StatsCard: React.FC<StatsCardProps> = ({ value, description, icon }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-center w-[350px]">
      <p className="text-xl sm:text-2xl font-extrabold text-dark-900 my-2 flex justify-center items-center">
        <span className="mr-2 flex justify-center items-center w-8 h-8">
          {icon}
        </span>{" "}
        {value}{" "}
        <span className="text-gray-500 text-xs sm:text-sm">{description}</span>
      </p>
    </div>
  );
};

export default StatsCard;

"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { WhiteLogo } from "@assets/icons";

interface SidebarProps {
  items: {
    name: string;
    path: string;
    icon: JSX.Element;
  }[];
}

const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="h-screen w-64 bg-brand-primary text-white flex flex-col">
      <div className="flex items-center justify-center h-16 border-b border-gray-700">
        <WhiteLogo />
      </div>
      <ul className="flex flex-col flex-grow p-4">
        {items.map((item) => (
          <li
            key={item.name}
            onClick={() => {
              router.push(item.path);
            }}
          >
            <a
              className={`flex items-center p-2 my-2 text-base font-medium rounded-lg cursor-pointer hover:bg-brand-primaryDark ${
                pathname === item.path ? "bg-brand-primaryDark" : ""
              }`}
            >
              {item.icon}
              <span className="ml-4">{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

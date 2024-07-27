import Navbar from "@components/Admin/Navbar/Navbar";
import Sidebar from "@components/Admin/Sidebar/Sidebar";
import React from "react";
import {
  FiSettings,
  FiFileText,
  FiList,
  FiGrid,
  FiUsers,
} from "react-icons/fi";

const adminItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <FiGrid />,
  },
  {
    name: "Users",
    path: "/users",
    icon: <FiUsers />,
  },
  {
    name: "Questions",
    path: "/questions",
    icon: <FiFileText />,
  },
  {
    name: "Tests",
    path: "/tests",
    icon: <FiList />,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: <FiSettings />,
  },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <div className="w-64">
        <Sidebar items={adminItems} />
      </div>
      <div className="flex-grow px-4 overflow-auto">
        <Navbar />
        {children}
      </div>
    </div>
  );
}

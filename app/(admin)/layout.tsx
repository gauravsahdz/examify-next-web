import Navbar from "@components/Admin/Navbar/Navbar";
import Sidebar from "@components/Admin/Sidebar/Sidebar";
import React from "react";
import { FiSettings, FiFileText, FiList, FiGrid } from "react-icons/fi";

const adminItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <FiGrid />,
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
      <Sidebar items={adminItems} />
      <div className="flex-grow p-4 overflow-auto">
        <Navbar />
        {children}
      </div>
    </div>
  );
}

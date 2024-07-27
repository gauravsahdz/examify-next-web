"use client";
import ImageWrapper from "@components/ImageWrapper";
import { useAppContext } from "@contexts/AppContext";
import { useRouter } from "next/navigation";
import React, { useCallback, useState, useEffect, useRef } from "react";
import { AiFillNotification, AiFillProfile } from "react-icons/ai";
import {
  FiHelpCircle,
  FiLogOut,
  FiSearch,
  FiSettings,
  FiUser,
} from "react-icons/fi";

const Navbar = () => {
  const router = useRouter();
  const { user }: any = useAppContext();
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleLogout = useCallback(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/login");
  }, [router]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <header className="flex justify-between items-center my-4 rounded-md shadow p-2">
      <div className="flex items-center gap-2 w-full max-w-md">
        <div className="relative flex-grow rounded-md">
          <FiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="p-3 pl-10 bg-gray-100 rounded-lg w-full focus:outline-brand-accent focus:bg-white"
          />
        </div>
      </div>
      <div className="flex items-center gap-2 rounded-md p-1">
        <ImageWrapper
          src={user?.photo}
          alt="profile"
          className="rounded-full"
          width={30}
          height={30}
          fallbackSrc="/assets/images/avatar.png"
          divStyle="bg-gray-100 p-1 rounded-full cursor-pointer hover:bg-gray-200"
          handleImageClick={() => setShowMenu(!showMenu)}
        />
        {showMenu && (
          <div
            ref={menuRef}
            className="absolute top-20 right-18 bg-white shadow-md rounded-md p-2 z-10 w-40 flex flex-col gap-2"
          >
            <p className="text-sm cursor-pointer hover:text-brand-primary">
              <FiUser className="text-base inline-block mr-2" />
              Profile
            </p>
            <p className="text-sm cursor-pointer hover:text-brand-primary">
              <FiHelpCircle className="text-base inline-block mr-2" />
              Help
            </p>
            <p
              className="text-sm cursor-pointer hover:text-brand-primary"
              onClick={handleLogout}
            >
              <FiLogOut className="text-base inline-block mr-2" />
              Logout
            </p>
          </div>
        )}
        <p className="text-sm">
          {user?.firstName} {user?.lastName}
        </p>
        <AiFillNotification className="text-xl text-gray-600 cursor-pointer hover:text-brand-primary" />
        <FiSettings className="text-xl text-gray-600 cursor-pointer hover:text-brand-primary" />
      </div>
    </header>
  );
};

export default Navbar;

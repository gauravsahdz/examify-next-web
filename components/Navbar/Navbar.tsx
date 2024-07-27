"use client";
import React from "react";
import { Logo } from "@assets/icons";
import { useRouter } from "next/navigation";
import { Button } from "antd";

const Navbar = () => {
  const router = useRouter();
  return (
    <header className="flex flex-row justify-between items-center p-6">
      <div
        onClick={() => {
          router.push("/");
        }}
      >
        <Logo className="cursor-pointer" />
      </div>

      <ul className="hidden sm:flex flex-row items-center gap-6 text-lgtext-gray-900">
        <Button
          type="text"
          onClick={() => {
            router.push("/login");
          }}
        >
          Log in
        </Button>

        <li>
          <Button
            type="primary"
            ghost
            onClick={() => {
              router.push("/signup");
            }}
          >
            Sign up
          </Button>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;

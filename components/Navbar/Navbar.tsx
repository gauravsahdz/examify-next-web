"use client";
import Button from "@components/Button";
import React from "react";
import { Logo } from "@assets/icons";
import { useRouter } from "next/navigation";

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
        <li
          className="hover:text-brand-primary cursor-pointer"
          onClick={() => {
            router.push("/login");
          }}
        >
          Log in
        </li>

        <li>
          <Button
            btnText="Sign up"
            variant="outline"
            handleClick={() => {
              router.push("/signup");
            }}
          />
        </li>
      </ul>
    </header>
  );
};

export default Navbar;

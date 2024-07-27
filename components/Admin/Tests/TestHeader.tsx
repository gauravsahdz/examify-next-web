"use client";
import React from "react";
import { FiPlus } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { Button } from "antd";

const TestHeader = () => {
  const router = useRouter();

  return (
    <div className="flex flex-row justify-between w-full gap-4">
      <div></div>
      <Button
        type="primary"
        icon={<FiPlus />}
        onClick={() => {
          router.push("/tests/new");
        }}
      >
        Add Test
      </Button>
    </div>
  );
};

export default TestHeader;

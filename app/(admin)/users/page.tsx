import UsersTable from "@components/Admin/Users/UsersTable";
import { Button } from "antd";
import React from "react";
import { FiPlus } from "react-icons/fi";

const page = () => {
  return (
    <div className="flex flex-col justify-between items-center gap-4 m-auto">
      <div className="flex flex-row justify-between w-full gap-4">
        <div></div>
        <Button type="primary" icon={<FiPlus />} shape="round" size="large">
          Add Test
        </Button>
      </div>

      <div className="flex flex-row justify-between gap-4 w-full">
        {/* <AddTests />
        <TestSetting /> */}
        {/* <AddQuestions /> */}
        {/* <ReviewQuestions /> */}
        <UsersTable />
      </div>
    </div>
  );
};

export default page;

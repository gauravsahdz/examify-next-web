import AddQuestions from "@components/Admin/Tests/AddQuestions";
import AddTests from "@components/Admin/Tests/AddTests";
import ReviewQuestions from "@components/Admin/Tests/ReviewQuestions";
import TestSetting from "@components/Admin/Tests/TestSetting";
import TestsTable from "@components/Admin/Tests/TestsTable";
import Button from "@components/Button";
import { FiPlus } from "react-icons/fi";

const page = () => {
  return (
    <div className="flex flex-col justify-between items-center gap-4 m-auto">
      <div className="flex flex-row justify-between w-full gap-4">
        <div></div>
        <Button
          btnText="Add Test"
          variant="primary"
          leftIcon={<FiPlus className="text-xl" />}
        />
      </div>

      <div className="flex flex-row justify-between gap-4 w-full">
        {/* <AddTests />
        <TestSetting /> */}
        {/* <AddQuestions /> */}
        {/* <ReviewQuestions /> */}
        <TestsTable />
      </div>
    </div>
  );
};
export default page;

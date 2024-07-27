import TestHeader from "@components/Admin/Tests/TestHeader";
import TestsTable from "@components/Admin/Tests/TestsTable";

const page = () => {
  return (
    <div className="flex flex-col justify-between items-center gap-4 m-auto">
      <TestHeader />
      <TestsTable />
    </div>
  );
};
export default page;

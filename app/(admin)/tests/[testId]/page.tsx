"use client";
import AddTests from "@components/Admin/Tests/AddTests";
import TestSetting from "@components/Admin/Tests/TestSetting";
import useApi from "@hooks/useApi";
import { TEST_API } from "@utils/endpoints";
import { Spin } from "antd";
import { HttpStatusCode } from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";

const TestForm = ({ params }: { params: any }) => {
  const { apiCall, error, loading } = useApi();
  const router = useRouter();

  const [testSettings, setTestSettings] = useState<any>({});
  const [settings, setSettings] = useState<any>({});
  const [testInstructions, setTestInstructions] = useState<any>({});

  useEffect(() => {
    const { switchStates, inputValues } = testSettings;
    setSettings({ ...switchStates, ...inputValues, ...testInstructions });
  }, [testSettings, testInstructions]);

  const handleClick = useCallback(async () => {
    try {
      const res: any = await apiCall.post(TEST_API, settings);
      if (res.data.status === HttpStatusCode.Created) {
        toast.success("Successfully registered");
        router.push(`/tests/question/${res.data.test._id}`);
      }
    } catch (error) {
      console.log(error);
    }
  }, [settings, router]);

  if (loading) {
    return <Spin fullscreen size="large" />;
  }

  return (
    <div className="flex flex-row gap-4">
      <AddTests
        setTestInstructions={setTestInstructions}
        handleClick={handleClick}
      />
      <TestSetting setTestSettings={setTestSettings} />
    </div>
  );
};
export default TestForm;

"use client";
import ConfirmationModal from "@components/Modal/ConfirmationModal";
import Table from "@components/Table/Table";
import useApi from "@hooks/useApi";
import { TEST_API } from "@utils/endpoints";
import { Spin } from "antd";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";

const TestsTable = () => {
  const router = useRouter();
  const { apiCall, error, loading } = useApi();
  const [tests, setTests] = useState<any[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);

  const fetchTests = async () => {
    try {
      const res: any = await apiCall.get(TEST_API);
      setTests(res.data.tests);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTests();
  }, []);

  const columns = [
    {
      title: "Test Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Test Date",
      dataIndex: "testDate",
      key: "testDate",
    },
    {
      title: "Test Duration",
      dataIndex: "duration",
      key: "duration",
    },
    {
      title: "Attempts",
      dataIndex: "attempts",
      key: "attempts",
    },
    {
      title: "Total Questions",
      dataIndex: "totalQuestions",
      key: "totalQuestions",
    },
    {
      title: "Browser Lock",
      dataIndex: "browserLocked",
      key: "browserLocked",
    },
    {
      title: "Webcam",
      dataIndex: "webCam",
      key: "webCam",
    },
    {
      title: "Shuffle Questions",
      dataIndex: "shuffleQuestions",
      key: "shuffleQuestions",
    },
    {
      title: "No of Questions",
      dataIndex: "noOfQuestionsPerPage",
      key: "noOfQuestionsPerPage",
    },
    {
      title: "Negative Marking",
      dataIndex: "negativeMarking",
      key: "negativeMarking",
    },
    {
      title: "Enable Calculator",
      dataIndex: "calculator",
      key: "calculator",
    },
    {
      title: "Auto Submit",
      dataIndex: "autoSave",
      key: "autoSave",
    },
    {
      title: "Grace Time",
      dataIndex: "graceTime",
      key: "graceTime",
    },
    {
      title: "Show Result",
      dataIndex: "showResult",
      key: "showResult",
    },
  ];

  const booleanTextMap = {
    browserLocked: {
      trueText: "Yes",
      falseText: "No",
    },
    webCam: {
      trueText: "Yes",
      falseText: "No",
    },
    shuffleQuestions: {
      trueText: "Yes",
      falseText: "No",
    },
    negativeMarking: {
      trueText: "Yes",
      falseText: "No",
    },
    calculator: {
      trueText: "Yes",
      falseText: "No",
    },
    autoSave: {
      trueText: "Yes",
      falseText: "No",
    },
    showResult: {
      trueText: "Yes",
      falseText: "No",
    },
  };

  const handleActionClick = useCallback(async (action: string, record: any) => {
    if (action === "edit") {
      router.push(`/tests/${record._id}`);
    } else if (action === "delete") {
      setShowModal(true);
    }
  }, []);

  const handleDelete = async () => {
    setShowModal(false);
    await apiCall.delete(`${TEST_API}/${tests[0]._id}`);
    toast.success("Test deleted successfully");
    fetchTests();
  };

  if (loading) {
    return <Spin fullscreen size="large" />;
  }

  return (
    <div className="flex flex-row justify-between gap-4 w-full">
      <Table
        columns={columns}
        data={tests}
        headerFixed={true}
        rowHoverEffect={true}
        booleanTextMap={booleanTextMap}
        dateColumns={["testDate"]}
        actionColumn={["edit", "delete"]}
        onActionClick={handleActionClick}
      />
      <ConfirmationModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleDelete}
      />
    </div>
  );
};

export default TestsTable;

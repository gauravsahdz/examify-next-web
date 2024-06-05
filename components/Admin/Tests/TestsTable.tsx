"use client";
import Table from "@components/Table";
import React from "react";

const TestsTable = () => {
  const columns = [
    {
      title: "Test Name",
      dataIndex: "testName",
      key: "testName",
    },
    {
      title: "Test Date",
      dataIndex: "testDate",
      key: "testDate",
    },
    {
      title: "Test Duration",
      dataIndex: "testDuration",
      key: "testDuration",
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
      dataIndex: "browserLock",
      key: "browserLock",
    },
    {
      title: "Webcam",
      dataIndex: "webcam",
      key: "webcam",
    },
    {
      title: "Shuffle Questions",
      dataIndex: "shuffleQuestions",
      key: "shuffleQuestions",
    },
    {
      title: "No of Questions",
      dataIndex: "noOfQuestions",
      key: "noOfQuestions",
    },
    {
      title: "Negative Marking",
      dataIndex: "negativeMarking",
      key: "negativeMarking",
    },
    {
      title: "Enable Calculator",
      dataIndex: "enableCalculator",
      key: "enableCalculator",
    },
    {
      title: "Auto Submit",
      dataIndex: "autoSubmit",
      key: "autoSubmit",
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

  const data = [
    {
      testName: "Test 1",
      testDate: "12/12/2021",
      testDuration: "30",
      attempts: "2",
      totalQuestions: "10",
      browserLock: "Yes",
      webcam: "Yes",
      shuffleQuestions: "Yes",
      noOfQuestions: "10",
      negativeMarking: "Yes",
      enableCalculator: "Yes",
      autoSubmit: "Yes",
      graceTime: "5",
      showResult: "Yes",
    },
    {
      testName: "Test 2",
      testDate: "12/12/2021",
      testDuration: "30",
      attempts: "2",
      totalQuestions: "10",
      browserLock: "Yes",
      webcam: "Yes",
      shuffleQuestions: "Yes",
      noOfQuestions: "10",
      negativeMarking: "Yes",
      enableCalculator: "Yes",
      autoSubmit: "Yes",
      graceTime: "5",
      showResult: "Yes",
    },
    {
      testName: "Test 3",
      testDate: "12/12/2021",
      testDuration: "30",
      attempts: "2",
      totalQuestions: "10",
      browserLock: "Yes",
      webcam: "Yes",
      shuffleQuestions: "Yes",
      noOfQuestions: "10",
      negativeMarking: "Yes",
      enableCalculator: "Yes",
      autoSubmit: "Yes",
      graceTime: "5",
      showResult: "Yes",
    },
    {
      testName: "Test 4",
      testDate: "12/12/2021",
      testDuration: "30",
      attempts: "2",
      totalQuestions: "10",
      browserLock: "Yes",
      webcam: "Yes",
      shuffleQuestions: "Yes",
      noOfQuestions: "10",
      negativeMarking: "Yes",
      enableCalculator: "Yes",
      autoSubmit: "Yes",
      graceTime: "5",
      showResult: "Yes",
    },
  ];

  return (
    <Table
      columns={columns}
      data={data}
      headerFixed={true}
      rowHoverEffect={true}
    />
  );
};

export default TestsTable;

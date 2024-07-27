"use client";
import { Button } from "antd";
import React, { useCallback, useState } from "react";
import { CgFileAdd } from "react-icons/cg";
import { FiArrowRight } from "react-icons/fi";

const AddTests = ({
  setTestInstructions,
  handleClick,
}: {
  setTestInstructions: React.Dispatch<React.SetStateAction<any>>;
  handleClick: () => void;
}) => {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setTestInstructions((prev: any) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    },
    [setTestInstructions]
  );

  return (
    <div className="w-full p-4 border rounded shadow">
      <h1 className="text-lg font-semibold mb-4">Test Instructions</h1>
      <div className="flex flex-col gap-4 mt-4">
        <div className="flex flex-col gap-2">
          <p>Test Name: </p>
          <input
            type="text"
            name="name"
            placeholder="Enter Test Name"
            className="w-full p-2 border rounded focus:outline-brand-primary"
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-2">
          <p>Test Date: </p>
          <input
            type="date"
            name="testDate"
            className="w-full p-2 border rounded focus:outline-brand-primary"
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-2">
          <p>Duration: </p>
          <select
            className="w-full p-2 border rounded focus:outline-brand-primary"
            onChange={handleChange}
            name="duration"
          >
            <option value="1800">30 minutes</option>
            <option value="3600">1 hour</option>
            <option value="5400">1 hour 30 minutes</option>
            <option value="7200">2 hours</option>
            <option value="9000">2 hours 30 minutes</option>
            <option value="10800">3 hours</option>
          </select>
        </div>

        <div>
          <p>Attempts: </p>
          <input
            type="number"
            placeholder="Enter Number of Attempts"
            className="w-full p-2 border rounded focus:outline-brand-primary"
            name="attempts"
            onChange={handleChange}
          />
        </div>

        <div className="flex">
          <Button
            type="primary"
            ghost
            onClick={handleClick}
            icon={<FiArrowRight />}
            iconPosition="end"
          >
            Proceed to add questions
          </Button>
          {/* <p>Questions</p>
          <p className="flex items-center gap-2">
            <span className="p-1 bg-green-500 rounded-full">
              <CgFileAdd className="text-white" />
            </span>{" "}
            <span
              className="text-sm cursor-pointer underline hover:text-blue-500 transition-all duration-300 ease-in-out transform"
              onClick={handleClick}
            >
              Add questions manually
            </span>
            (or){" "}
            <span className="p-1 bg-blue-500 rounded-full">
              <FiUpload className="text-white" />
            </span>
            <span
              className="text-sm cursor-pointer underline hover:text-blue-500 transition-all duration-300 ease-in-out transform"
              onClick={handleClick}
            >
              Upload Excelsheet
            </span>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default AddTests;

"use client";
import React from "react";
import { CgFileAdd } from "react-icons/cg";
import { FiUpload } from "react-icons/fi";

const AddTests = () => {
  const handleClick = () => {
    alert("Add questions manually");
  };
  return (
    <div className="w-full p-4 border rounded">
      <h1 className="text-lg font-semibold mb-4">Test Instructions</h1>
      <div className="flex flex-col gap-4 mt-4">
        <div className="flex flex-col gap-2">
          <p>Test Name: </p>
          <input
            type="text"
            placeholder="Enter Test Name"
            className="w-full p-2 border rounded focus:outline-brand-primary"
          />
        </div>

        <div className="flex flex-col gap-2">
          <p>Test Date: </p>
          <input
            type="date"
            className="w-full p-2 border rounded focus:outline-brand-primary"
          />
        </div>

        <div className="flex flex-col gap-2">
          <p>Duration: </p>
          <select className="w-full p-2 border rounded focus:outline-brand-primary">
            <option value="30 minutes">30 minutes</option>
            <option value="1 hour">1 hour</option>
            <option value="1 hour 30 minutes">1 hour 30 minutes</option>
            <option value="2 hours">2 hours</option>
            <option value="2 hours 30 minutes">2 hours 30 minutes</option>
            <option value="3 hours">3 hours</option>
          </select>
        </div>

        <div>
          <p>Attempts: </p>
          <input
            type="number"
            placeholder="Enter Number of Attempts"
            className="w-full p-2 border rounded focus:outline-brand-primary"
          />
        </div>

        <div className="flex flex-col gap-2">
          <p>Questions</p>
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
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddTests;

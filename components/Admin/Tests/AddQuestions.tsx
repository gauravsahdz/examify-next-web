"use client";
import React, { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";

const AddQuestions = () => {
  const [addQuestions, setAddQuestions] = useState<boolean>(false);
  const [isMutlipleCorrect, setIsMutlipleCorrect] = useState<boolean>(false);

  return (
    <div className="w-full h-96 border p-4 flex flex-col rounded overflow-y-auto">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <FaArrowLeftLong className="text-xl cursor-pointer hover:text-gray-500 transition-all duration-300 ease-in-out transform" />
          <h1 className="text-lg font-semibold">Questions</h1>
        </div>
        <div className="flex items-center bg-gray-500 rounded-full p-1">
          <FiPlus className="text-xl text-white cursor-pointer" />
        </div>
      </div>
      {!addQuestions && (
        <div className="flex flex-col items-center justify-center h-full">
          <p className="text-center">
            <span
              className="text-blue-500 underline cursor-pointer"
              onClick={() => setAddQuestions(true)}
            >
              Click here
            </span>{" "}
            <span className="text-gray-500">to add questions</span>
          </p>
        </div>
      )}

      {addQuestions && (
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2">
              <p className="text-lg text-gray-500 font-bold">1.</p>
              <textarea
                placeholder="Enter Question"
                className="w-full p-2 border rounded focus:outline-brand-primary"
              />
            </div>
            <div className="flex flex-row justify-between gap-2">
              <p className="text-sm text-gray-500">Add Options</p>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="h-4 w-4"
                  onChange={() => setIsMutlipleCorrect(!isMutlipleCorrect)}
                />
                Multiple Correct
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <input type="checkbox" className="h-5 w-5" />
                <input
                  type="text"
                  placeholder="Option 1"
                  className="w-full p-1 border rounded focus:outline-brand-primary"
                />
              </div>

              <div className="flex items-center gap-2">
                <input type="checkbox" className="h-5 w-5" />
                <input
                  type="text"
                  placeholder="Option 2"
                  className="w-full p-1 border rounded focus:outline-brand-primary"
                />
              </div>

              <div className="flex items-center gap-2">
                <input type="checkbox" className="h-5 w-5" />
                <input
                  type="text"
                  placeholder="Option 3"
                  className="w-full p-1 border rounded focus:outline-brand-primary"
                />
              </div>

              <div className="flex items-center gap-2">
                <input type="checkbox" className="h-5 w-5" />
                <input
                  type="text"
                  placeholder="Option 4"
                  className="w-full p-1 border rounded focus:outline-brand-primary"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddQuestions;

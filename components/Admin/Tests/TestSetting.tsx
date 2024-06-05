"use client";
import ToggleSwitch from "@components/ToggleSwitch";
import React, { useState } from "react";
import { AiFillCalculator } from "react-icons/ai";
import { BsFillWebcamFill } from "react-icons/bs";
import { CiCircleMinus } from "react-icons/ci";
import {
  FiClock,
  FiList,
  FiLock,
  FiSave,
  FiShuffle,
  FiToggleLeft,
} from "react-icons/fi";
import { MdOutlinePublish } from "react-icons/md";

const options = [
  { icon: FiLock, label: "Lock Browser", type: "toggle" },
  { icon: BsFillWebcamFill, label: "Webcam", type: "toggle" },
  { icon: FiShuffle, label: "Shuffle Questions", type: "toggle" },
  { icon: FiList, label: "No of Questions per Page", type: "number" },
  { icon: CiCircleMinus, label: "Negative Marking", type: "toggle" },
  { icon: AiFillCalculator, label: "Enable Calculator", type: "toggle" },
  { icon: FiSave, label: "Auto-Save Answers", type: "toggle" },
  { icon: FiToggleLeft, label: "Switch between answers", type: "toggle" },
  { icon: FiClock, label: "Grace Time (min)", type: "number" },
  {
    icon: MdOutlinePublish,
    label: "Publish Grades after Submission",
    type: "toggle",
  },
];

const TestSetting = () => {
  const [switchStates, setSwitchStates] = useState(
    options.reduce((acc: any, option) => {
      acc[option.label] = false;
      return acc;
    }, {})
  );

  const [inputValues, setInputValues] = useState(
    options.reduce((acc: any, option) => {
      if (option.type === "number") {
        acc[option.label] = "";
      }
      return acc;
    }, {})
  );

  const handleToggle = (label: string) => {
    setSwitchStates((prevState: any) => ({
      ...prevState,
      [label]: !prevState[label],
    }));
  };

  const handleInputChange = (label: string, value: any) => {
    setInputValues((prevState: any) => ({
      ...prevState,
      [label]: value,
    }));
  };

  return (
    <div className="p-5 border rounded w-1/2">
      <h1 className="text-lg font-semibold mb-4">Test Setting</h1>
      <ul className="list-none p-0">
        {options.map(({ icon: Icon, label, type }) => (
          <li key={label} className="flex items-center mb-4">
            <Icon className="mr-2" />
            <span className="flex-grow">{label}</span>
            {type === "toggle" ? (
              <ToggleSwitch
                isOn={switchStates[label]}
                onToggle={() => handleToggle(label)}
              />
            ) : (
              <div className="flex items-center ml-auto">
                <input
                  type="number"
                  value={inputValues[label]}
                  onChange={(e) => handleInputChange(label, e.target.value)}
                  className="w-12 p-1 border rounded"
                />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestSetting;

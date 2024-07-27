"use client";
import React, { useCallback, useEffect, useState } from "react";
import { TEST_OPTIONS } from "@constants/defaultValues";
import { Switch } from "antd";

const TestSetting = ({ setTestSettings }: any) => {
  const [switchStates, setSwitchStates] = useState(
    TEST_OPTIONS.reduce((acc: any, option) => {
      acc[option.key] = false;
      return acc;
    }, {})
  );

  const [inputValues, setInputValues] = useState(
    TEST_OPTIONS.reduce((acc: any, option) => {
      if (option.type === "number") {
        acc[option.key] = "";
      }
      return acc;
    }, {})
  );

  const handleToggle = useCallback((key: string) => {
    setSwitchStates((prevState: any) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  }, []);

  const handleInputChange = useCallback((key: string, value: any) => {
    setInputValues((prevState: any) => ({
      ...prevState,
      [key]: value,
    }));
  }, []);

  useEffect(() => {
    setTestSettings((prev: any) => ({
      ...prev,
      switchStates,
      inputValues,
    }));
  }, [switchStates, inputValues]);

  return (
    <div className="p-5 border rounded w-1/2 shadow">
      <h1 className="text-lg font-semibold mb-4">Test Settings</h1>
      <ul className="list-none p-0">
        {TEST_OPTIONS.map(({ icon: Icon, label, type, key }) => (
          <li key={key} className="flex items-center mb-4">
            <Icon className="mr-2" />
            <span className="flex-grow">{label}</span>
            {type === "toggle" ? (
              <Switch
                checked={switchStates[key]}
                onChange={() => handleToggle(key)}
              />
            ) : (
              <div className="flex items-center ml-auto">
                <input
                  type="number"
                  value={inputValues[key]}
                  onChange={(e) => handleInputChange(key, e.target.value)}
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

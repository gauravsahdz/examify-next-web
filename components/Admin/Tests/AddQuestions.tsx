"use client";
import Button from "@components/Button";
import useApi from "@hooks/useApi";
import { QUESTION_API } from "@utils/endpoints";
import { HttpStatusCode } from "axios";
import { useRouter } from "next/navigation";
import React, { useCallback, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";

const AddQuestions = () => {
  const router = useRouter();
  const { apiCall, error, loading } = useApi();
  const [isMultipleCorrect, setIsMultipleCorrect] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [checkedOptions, setCheckedOptions] = useState<Record<string, boolean>>(
    {
      option1: false,
      option2: false,
      option3: false,
      option4: false,
    }
  );

  const [currentQuestion, setCurrentQuestion] = useState("");
  const [currentOptions, setCurrentOptions] = useState<Record<string, string>>({
    option1: "",
    option2: "",
    option3: "",
    option4: "",
  });

  const optionType = useMemo(
    () => (isMultipleCorrect ? "checkbox" : "radio"),
    [isMultipleCorrect]
  );

  const handleOptionChange = useCallback(
    (option: string) => {
      if (isMultipleCorrect) {
        setCheckedOptions((prev) => ({ ...prev, [option]: !prev[option] }));
      } else {
        setSelectedOption(option);
      }
    },
    [isMultipleCorrect]
  );

  const handleInputChange = useCallback((option: string, value: string) => {
    setCurrentOptions((prev) => ({ ...prev, [option]: value }));
  }, []);

  const handleAddQuestion = useCallback(async () => {
    const correctAnswers = isMultipleCorrect
      ? Object.keys(checkedOptions)
          .filter((key) => checkedOptions[key])
          .map((key) => currentOptions[key])
      : selectedOption
      ? [currentOptions[selectedOption]]
      : [];

    const res: any = await apiCall.post(QUESTION_API, {
      question: currentQuestion,
      options: Object.values(currentOptions),
      correctAnswer: correctAnswers,
    });

    if (res.data.status === HttpStatusCode.Created) {
      toast.success("Successfully added question");
    }
    setCurrentQuestion("");
    setCurrentOptions({
      option1: "",
      option2: "",
      option3: "",
      option4: "",
    });
    setSelectedOption(null);
    setCheckedOptions({
      option1: false,
      option2: false,
      option3: false,
      option4: false,
    });
  }, [
    currentQuestion,
    currentOptions,
    isMultipleCorrect,
    selectedOption,
    checkedOptions,
  ]);

  return (
    <div className="border p-4 flex flex-col shadow rounded overflow-y-auto w-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <FaArrowLeftLong
            className="text-xl cursor-pointer hover:text-gray-500 transition-all duration-300 ease-in-out transform"
            onClick={() => {
              router.push("/tests");
            }}
          />
          <h1 className="text-lg font-semibold">Questions</h1>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-2">
            <p className="text-lg text-gray-500 font-bold">1.</p>
            <textarea
              value={currentQuestion}
              onChange={(e) => setCurrentQuestion(e.target.value)}
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
                onChange={() => {
                  setIsMultipleCorrect(!isMultipleCorrect);
                  setSelectedOption(null);
                  setCheckedOptions({
                    option1: false,
                    option2: false,
                    option3: false,
                    option4: false,
                  });
                }}
                checked={isMultipleCorrect}
              />
              <span>Multiple Correct</span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            {["option1", "option2", "option3", "option4"].map(
              (option, index) => (
                <div key={option} className="flex items-center gap-2">
                  <input
                    type={optionType}
                    className="h-5 w-5"
                    name="options"
                    checked={
                      isMultipleCorrect
                        ? checkedOptions[option]
                        : selectedOption === option
                    }
                    onChange={() => handleOptionChange(option)}
                  />
                  <input
                    type="text"
                    placeholder={`Option ${index + 1}`}
                    value={currentOptions[option]}
                    onChange={(e) => handleInputChange(option, e.target.value)}
                    className="w-full p-1 border rounded focus:outline-brand-primary"
                  />
                </div>
              )
            )}
          </div>
        </div>
        <div className="flex items-center justify-end">
          <Button
            btnText="Add Question"
            leftIcon={<FiPlus />}
            variant="primary"
            handleClick={handleAddQuestion}
          />
        </div>
      </div>
    </div>
  );
};

export default AddQuestions;

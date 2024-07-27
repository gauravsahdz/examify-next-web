import useApi from "@hooks/useApi";
import { QUESTION_API } from "@utils/endpoints";
import { Button } from "antd";
import React, { useCallback } from "react";
import toast from "react-hot-toast";
import { FiDelete, FiEdit } from "react-icons/fi";

const ReviewQuestions = ({
  questions,
  fetchQuestions,
}: {
  questions: any[];
  fetchQuestions: any;
}) => {
  const { apiCall, error, loading } = useApi();

  const handleDeleteQuestion = useCallback(async (question: any) => {
    try {
      const res: any = await apiCall.delete(`${QUESTION_API}/${question._id}`);
      console.log("delete question", res);
      if (res.data.status === 200) {
        toast.success("Successfully deleted");
        fetchQuestions();
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="w-1/2 border p-4 flex justify-between flex-col rounded shadow">
      <div className="flex flex-col mb-2">
        <h1 className="text-lg font-semibold mb-4">Edit/Delete questions</h1>
        {questions.map((question, index) => (
          <div key={index} className="flex items-center gap-4">
            <p className="text-lg text-gray-500 font-bold">{index + 1}.</p>
            <p>{question.question.slice(0, 30)}...</p>
            <div className="flex items-center gap-2 ml-auto">
              <FiEdit className="cursor-pointer text-blue-500 transform hover:scale-110" />
              <FiDelete
                className="cursor-pointer text-red-500 transform hover:scale-110"
                onClick={() => handleDeleteQuestion(question)}
              />
            </div>
          </div>
        ))}
      </div>
      <Button type="primary">Review</Button>
    </div>
  );
};

export default ReviewQuestions;

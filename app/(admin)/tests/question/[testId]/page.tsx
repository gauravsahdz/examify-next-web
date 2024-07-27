"use client";
import AddQuestions from "@components/Admin/Tests/AddQuestions";
import AddTests from "@components/Admin/Tests/AddTests";
import ReviewQuestions from "@components/Admin/Tests/ReviewQuestions";
import TestSetting from "@components/Admin/Tests/TestSetting";
import useApi from "@hooks/useApi";
import { QUESTION_BY_TEST_API, TEST_API } from "@utils/endpoints";
import { HttpStatusCode } from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";

const Question = ({ params }: { params: any }) => {
  const { apiCall, error, loading } = useApi();
  const router = useRouter();
  const { testId } = params;

  const [questions, setQuestions] = useState<
    { question: string; options: string[]; correctAnswer: string[] }[]
  >([]);

  const fetchQuestions = async () => {
    try {
      const res: any = await apiCall.get(`${QUESTION_BY_TEST_API}`, {
        testId,
      });
      console.log("questins by testid", res);
      setQuestions(res.data.questions);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, [testId]);

  return (
    <div className="flex flex-row gap-4">
      <AddQuestions testId={testId} />
      <ReviewQuestions questions={questions} fetchQuestions={fetchQuestions} />
    </div>
  );
};
export default Question;

import Button from "@components/Button";
import React from "react";

const ReviewQuestions = () => {
  return (
    <div className="w-1/2 h-96 border p-4 flex flex-col justify-between rounded">
      <h1 className="text-lg font-semibold mb-4">Edit/Delete questions</h1>
      <Button btnText="Review" variant="primary" />
    </div>
  );
};

export default ReviewQuestions;

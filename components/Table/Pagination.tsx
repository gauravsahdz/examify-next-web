import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex space-x-2">
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`px-4 py-2 text-sm rounded-md ${
            number === currentPage
              ? "bg-gray-300 text-gray-700"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;

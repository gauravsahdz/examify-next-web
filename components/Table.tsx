import React, { useState } from "react";

interface Column {
  title: string;
  dataIndex: string;
  key: string;
}

interface Data {
  [key: string]: any;
}

interface TableProps {
  columns: Column[];
  data: Data[];
  headerFixed?: boolean;
  rowHoverEffect?: boolean;
  itemsPerPage?: number;
}

const Table: React.FC<TableProps> = ({
  columns,
  data,
  headerFixed = false,
  rowHoverEffect = true,
  itemsPerPage = 5,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className={headerFixed ? "sticky top-0 bg-gray-100" : ""}>
            <tr>
              {columns.map((col) => (
                <th
                  key={col.key}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {col.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item, index) => (
              <tr
                key={index}
                className={
                  rowHoverEffect ? "hover:bg-gray-100 cursor-pointer" : ""
                }
              >
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                  >
                    {item[col.dataIndex]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 text-sm text-gray-600 bg-gray-200 rounded-md"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-4 py-2 text-sm text-gray-600 bg-gray-200 rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;

import React, { useState } from "react";
import { format } from "date-fns";
import Pagination from "./Pagination";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

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
  rowBorder?: boolean;
  itemsPerPage?: number;
  booleanTextMap?: { [key: string]: { trueText: string; falseText: string } };
  dateColumns?: string[];
  actionColumn?: string[]; // New prop for action column
  onActionClick?: (action: string, record: Data) => void; // Function to handle action clicks
}

const Table: React.FC<TableProps> = ({
  columns,
  data,
  headerFixed = false,
  rowHoverEffect = true,
  rowBorder = true,
  itemsPerPage = 10,
  booleanTextMap = {},
  dateColumns = [],
  actionColumn = [], // Default to an empty array
  onActionClick = () => {}, // Default to an empty function
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), "yyyy/MM/dd");
    } catch (error) {
      return dateString;
    }
  };

  const getDisplayValue = (key: string, value: any) => {
    if (typeof value === "boolean" && booleanTextMap[key]) {
      return value
        ? booleanTextMap[key].trueText
        : booleanTextMap[key].falseText;
    }
    if (
      dateColumns.includes(key) &&
      typeof value === "string" &&
      !isNaN(Date.parse(value))
    ) {
      return formatDate(value);
    }
    return value;
  };

  const renderActionIcons = (record: Data) => (
    <div className="flex space-x-2">
      {actionColumn.includes("view") && (
        <FaEye
          className="text-base text-blue-500 cursor-pointer transform hover:scale-110"
          onClick={() => onActionClick("view", record)}
        />
      )}
      {actionColumn.includes("edit") && (
        <FaEdit
          className=" text-base text-yellow-500 cursor-pointer transform hover:scale-110"
          onClick={() => onActionClick("edit", record)}
        />
      )}
      {actionColumn.includes("delete") && (
        <FaTrash
          className="text-base text-red-500 cursor-pointer transform hover:scale-110"
          onClick={() => onActionClick("delete", record)}
        />
      )}
    </div>
  );

  return (
    <div className="w-full overflow-hidden rounded-lg shadow-xs">
      <div className="overflow-x-auto" style={{ height: "480px" }}>
        <table className="min-w-full divide-y divide-gray-300">
          <thead className={headerFixed ? "sticky top-0 bg-gray-200" : ""}>
            <tr>
              {actionColumn.length > 0 && (
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                  Action
                </th>
              )}
              {columns.map((col) => (
                <th
                  key={col.key}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap"
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
                {actionColumn.length > 0 && (
                  <td
                    className={`px-6 py-4 whitespace-nowrap text-sm text-gray-500 ${
                      rowBorder ? "border-b border-gray-200" : ""
                    }`}
                  >
                    {renderActionIcons(item)}
                  </td>
                )}
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className={`px-6 py-4 whitespace-nowrap text-sm text-gray-500 ${
                      rowBorder ? "border-b border-gray-200" : ""
                    }`}
                  >
                    {getDisplayValue(col.dataIndex, item[col.dataIndex])}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center items-center mt-4">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Table;

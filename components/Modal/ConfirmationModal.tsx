import React from "react";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const ConfirmationModal: React.FC<ModalProps> = ({
  show,
  onClose,
  onConfirm,
}) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-1/3">
        <h2 className="text-lg font-semibold mb-4">Delete Confirmation</h2>
        <p className="mb-6">Are you sure you want to delete?</p>
        <div className="flex justify-end">
          <button
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded mr-2"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={onConfirm}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;

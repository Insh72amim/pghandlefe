import React from 'react';

export default function AddPremiseModal({
  show,
  handleClose,
  children,
}: {
  show: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50  overflow-y-auto">
      <div className="bg-white dark:bg-black rounded-lg p-6 w-full max-w-2xl mx-4 my-8 relative shadow-2xl max-h-[90vh] overflow-y-auto">
        <button
          className="absolute top-0 right-0 mt-2 mr-2 text-gray-600 hover:text-gray-900"
          onClick={handleClose}
        >
          &times;
        </button>
        <div className="w-full flex flex-col space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-black mb-4 dark:text-white">
              Add New PG
            </h2>
            <hr className="border-stroke border-spacing-1 border-opacity-90 mb-2" />
          </div>
          <div className="max-h-[60vh] overflow-y-auto">{children}</div>
        </div>
      </div>
    </div>
  );
}

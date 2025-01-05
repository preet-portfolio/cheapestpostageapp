'use client';

import { useState } from "react";

export default function StepTwoPackage({
  onNext,
  onBack,
}: {
  onNext: (data: any) => void;
  onBack: () => void;
}) {
  const [packageInfo, setPackageInfo] = useState({
    type: "",
    contents: "",
    value: "",
    invoiceNote: "",
  });

  const handleSubmit = () => {
    const { type, contents, value } = packageInfo;

    if (!type || !contents || !value) {
      alert("Please fill in all fields.");
      return;
    }

    onNext({ package: packageInfo });
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Package Details</h2>
      <form className="space-y-4">
        {/* Package Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Package Type</label>
          <select
            className="w-full p-2 border rounded-md"
            value={packageInfo.type}
            onChange={(e) => setPackageInfo({ ...packageInfo, type: e.target.value })}
          >
            <option value="">Select Package Type</option>
            <option value="merchandise">Merchandise</option>
            <option value="gift">Gift</option>
          </select>
        </div>

        {/* Package Contents */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Package Contents</label>
          <textarea
            placeholder="Describe the package contents"
            className="w-full p-2 border rounded-md"
            value={packageInfo.contents}
            onChange={(e) => setPackageInfo({ ...packageInfo, contents: e.target.value })}
          />
        </div>

        {/* Total Value */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Total Value</label>
          <input
            type="number"
            placeholder="Enter package value in USD"
            className="w-full p-2 border rounded-md"
            value={packageInfo.value}
            onChange={(e) => setPackageInfo({ ...packageInfo, value: e.target.value })}
          />
        </div>

        {/* Invoice Note */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Invoice Note (Optional)</label>
          <textarea
            placeholder="Any note to include in the invoice"
            className="w-full p-2 border rounded-md"
            value={packageInfo.invoiceNote}
            onChange={(e) =>
              setPackageInfo({ ...packageInfo, invoiceNote: e.target.value })
            }
          />
        </div>
      </form>
      <div className="flex mt-4 space-x-4">
        <button
          onClick={onBack}
          className="bg-gray-600 text-white py-2 px-4 rounded-md"
        >
          Back
        </button>
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white py-2 px-4 rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
}
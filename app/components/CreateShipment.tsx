'use client';

import { useState } from "react";

export default function CreateShipmentPage() {
  const [formData, setFormData] = useState({
    recipientName: "",
    recipientAddress: "",
    packageType: "",
    packageContent: "",
    packageValue: "",
    packageWeight: "",
    packageDimensions: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("Shipment Data:", formData);
    alert("Shipment created successfully!");
  };

  return (
    <div className="p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Create Shipment</h1>
      <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
        {/* Recipient Details */}
        <div>
          <label htmlFor="recipientName" className="block font-medium">Recipient Name</label>
          <input
            type="text"
            id="recipientName"
            name="recipientName"
            value={formData.recipientName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="recipientAddress" className="block font-medium">Recipient Address</label>
          <input
            type="text"
            id="recipientAddress"
            name="recipientAddress"
            value={formData.recipientAddress}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Package Details */}
        <div>
          <label htmlFor="packageType" className="block font-medium">Package Type</label>
          <select
            id="packageType"
            name="packageType"
            value={formData.packageType}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Type</option>
            <option value="merchandise">Merchandise</option>
            <option value="gift">Gift</option>
          </select>
        </div>
        <div>
          <label htmlFor="packageContent" className="block font-medium">Package Content</label>
          <input
            type="text"
            id="packageContent"
            name="packageContent"
            value={formData.packageContent}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="packageValue" className="block font-medium">Package Value ($)</label>
          <input
            type="number"
            id="packageValue"
            name="packageValue"
            value={formData.packageValue}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Package Dimensions */}
        <div>
          <label htmlFor="packageWeight" className="block font-medium">Weight (kg)</label>
          <input
            type="number"
            id="packageWeight"
            name="packageWeight"
            value={formData.packageWeight}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="packageDimensions" className="block font-medium">Dimensions (LxWxH cm)</label>
          <input
            type="text"
            id="packageDimensions"
            name="packageDimensions"
            value={formData.packageDimensions}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Create Shipment
        </button>
      </form>
    </div>
  );
}
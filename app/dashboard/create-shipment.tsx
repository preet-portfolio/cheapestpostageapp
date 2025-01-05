'use client';

import { useState } from "react";

export default function CreateShipment() {
  const [step, setStep] = useState(1); // Tracks the current step
  const [formData, setFormData] = useState({
    recipientName: "",
    recipientEmail: "",
    recipientAddress: "",
    packageType: "",
    packageContent: "",
    declaredValue: "",
    weight: "",
    dimensions: "",
    rates: [],
  });

  const handleNextStep = () => setStep(step + 1);
  const handlePreviousStep = () => setStep(step - 1);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Step 1: Recipient Information
  const StepOneRecipient = () => (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Step 1: Recipient Details</h2>
      <input
        type="text"
        name="recipientName"
        placeholder="Recipient Name"
        value={formData.recipientName}
        onChange={handleChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <input
        type="email"
        name="recipientEmail"
        placeholder="Recipient Email"
        value={formData.recipientEmail}
        onChange={handleChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <textarea
        name="recipientAddress"
        placeholder="Recipient Address"
        value={formData.recipientAddress}
        onChange={handleChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      ></textarea>
      <button
        onClick={handleNextStep}
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Next
      </button>
    </div>
  );

  // Step 2: Package Details
  const StepTwoPackage = () => (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Step 2: Package Details</h2>
      <select
        name="packageType"
        value={formData.packageType}
        onChange={handleChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      >
        <option value="">Select Package Type</option>
        <option value="merchandise">Merchandise</option>
        <option value="gift">Gift</option>
      </select>
      <textarea
        name="packageContent"
        placeholder="Package Content"
        value={formData.packageContent}
        onChange={handleChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      ></textarea>
      <input
        type="number"
        name="declaredValue"
        placeholder="Declared Value (in USD)"
        value={formData.declaredValue}
        onChange={handleChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <div className="flex justify-between">
        <button
          onClick={handlePreviousStep}
          className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700"
        >
          Back
        </button>
        <button
          onClick={handleNextStep}
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Next
        </button>
      </div>
    </div>
  );

  // Step 3: Package Dimensions
  const StepThreeDimensions = () => (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Step 3: Dimensions</h2>
      <input
        type="text"
        name="weight"
        placeholder="Weight (in kg)"
        value={formData.weight}
        onChange={handleChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <input
        type="text"
        name="dimensions"
        placeholder="Dimensions (L x W x H in cm)"
        value={formData.dimensions}
        onChange={handleChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <div className="flex justify-between">
        <button
          onClick={handlePreviousStep}
          className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700"
        >
          Back
        </button>
        <button
          onClick={handleNextStep}
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Next
        </button>
      </div>
    </div>
  );

  // Step 4: Postage Rates
  const StepFourRates = () => (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Step 4: Postage Rates</h2>
      {/* Mock Data for Rates */}
      <div className="mb-4">
        <p className="text-lg font-medium">Standard Shipping: $10</p>
        <p className="text-lg font-medium">Express Shipping: $20</p>
      </div>
      <div className="flex justify-between">
        <button
          onClick={handlePreviousStep}
          className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700"
        >
          Back
        </button>
        <button
          className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
        >
          Purchase Postage
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-2xl">
        {step === 1 && <StepOneRecipient />}
        {step === 2 && <StepTwoPackage />}
        {step === 3 && <StepThreeDimensions />}
        {step === 4 && <StepFourRates />}
      </div>
    </div>
  );
}
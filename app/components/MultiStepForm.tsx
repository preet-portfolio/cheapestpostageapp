'use client';

import { useState } from "react";
import StepOneRecipient from "./Steps/StepOneRecipient";
import StepTwoPackage from "./Steps/StepTwoPackage";
import StepThreeDimensions from "./Steps/StepThreeDimensions";
import StepFourRates from "./Steps/StepFourRates";

export default function CreateShipment() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNext = (data: any) => {
    setFormData({ ...formData, ...data });
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Create Shipment</h1>
      {step === 1 && <StepOneRecipient onNext={handleNext} />}
      {step === 2 && <StepTwoPackage onNext={handleNext} onBack={handleBack} />}
      {step === 3 && (
        <StepThreeDimensions onNext={handleNext} onBack={handleBack} />
      )}
      {step === 4 && <StepFourRates formData={formData} onBack={handleBack} />}
    </div>
  );
}
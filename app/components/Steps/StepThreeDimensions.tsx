'use client';

import { useState } from "react";

export default function StepThreeDimensions({
  onNext,
  onBack,
}: {
  onNext: (data: any) => void;
  onBack: () => void;
}) {
  const [dimensions, setDimensions] = useState({
    length: "",
    width: "",
    height: "",
    weight: "",
  });

  const handleSubmit = () => {
    const { length, width, height, weight } = dimensions;

    if (!length || !width || !height || !weight) {
      alert("Please provide all dimensions.");
      return;
    }

    onNext({ dimensions });
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Package Dimensions</h2>
      <form className="space-y-4">
        <input
          type="number"
          placeholder="Length (in inches)"
          className="w-full p-2 border rounded-md"
          value={dimensions.length}
          onChange={(e) =>
            setDimensions({ ...dimensions, length: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Width (in inches)"
          className="w-full p-2 border rounded-md"
          value={dimensions.width}
          onChange={(e) =>
            setDimensions({ ...dimensions, width: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Height (in inches)"
          className="w-full p-2 border rounded-md"
          value={dimensions.height}
          onChange={(e) =>
            setDimensions({ ...dimensions, height: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Weight (in lbs)"
          className="w-full p-2 border rounded-md"
          value={dimensions.weight}
          onChange={(e) =>
            setDimensions({ ...dimensions, weight: e.target.value })
          }
        />
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
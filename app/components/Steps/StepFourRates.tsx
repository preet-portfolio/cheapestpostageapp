'use client';

import { useEffect, useState } from "react";

export default function StepFourRates({
  formData,
  onBack,
}: {
  formData: any;
  onBack: () => void;
}) {
  const [rates, setRates] = useState([]);
  const [selectedRate, setSelectedRate] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRates() {
      try {
        setLoading(true);

        // Mock API call
        const response = await fetch("/api/getPostageRates", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();
        setRates(data.rates);
      } catch (error) {
        console.error("Error fetching rates:", error);
        alert("Failed to fetch rates. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    fetchRates();
  }, [formData]);

  const handlePurchase = async () => {
    if (!selectedRate) {
      alert("Please select a postage rate.");
      return;
    }

    // Purchase postage logic
    alert("Postage purchased successfully!");
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Postage Rates</h2>
      {loading ? (
        <p>Loading rates...</p>
      ) : (
        <div className="space-y-4">
          {rates.map((rate: any) => (
            <div
              key={rate.id}
              className={`p-4 border rounded-md cursor-pointer ${
                selectedRate?.id === rate.id ? "border-blue-600" : "border-gray-300"
              }`}
              onClick={() => setSelectedRate(rate)}
            >
              <h3 className="text-lg font-bold">{rate.service_name}</h3>
              <p>Cost: ${rate.total_price}</p>
              <p>Delivery Time: {rate.delivery_days} days</p>
            </div>
          ))}
        </div>
      )}
      <div className="flex mt-4 space-x-4">
        <button
          onClick={onBack}
          className="bg-gray-600 text-white py-2 px-4 rounded-md"
        >
          Back
        </button>
        <button
          onClick={handlePurchase}
          disabled={!selectedRate}
          className={`${
            selectedRate ? "bg-green-600 hover:bg-green-700" : "bg-gray-300"
          } text-white py-2 px-4 rounded-md`}
        >
          Purchase Postage
        </button>
      </div>
    </div>
  );
}
'use client';

export default function StepOneRecipient({ onNext }: { onNext: (data: any) => void }) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      name: (e.target as HTMLFormElement).recipientName.value,
      address: (e.target as HTMLFormElement).recipientAddress.value,
    };
    onNext(data); // Pass data to the next step
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold mb-4">Step 1: Recipient Details</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Recipient Name:</label>
        <input
          type="text"
          name="recipientName"
          className="border p-2 rounded w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Recipient Address:</label>
        <input
          type="text"
          name="recipientAddress"
          className="border p-2 rounded w-full"
          required
        />
      </div>
      <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
        Next
      </button>
    </form>
  );
}
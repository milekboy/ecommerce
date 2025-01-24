// components/ProductDetails.js
import { useState } from "react";

const ProductSpecs = ({ details, specifications }) => {
  const [activeTab, setActiveTab] = useState("details");

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Tab Buttons */}
      <div className="flex border-b border-gray-300">
        <button
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === "details"
              ? "border-b-2 border-red-500 text-red-500"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("details")}
        >
          Details
        </button>
        <button
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === "specifications"
              ? "border-b-2 border-red-500 text-red-500"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("specifications")}
        >
          Specifications
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        {activeTab === "details" && (
          <div className="bg-gray-50 p-4 rounded-md shadow-md">
            <p className="text-gray-700">{details}</p>
          </div>
        )}
        {activeTab === "specifications" && (
          <div className="bg-gray-50 p-4 rounded-md shadow-md">
            <ul className="list-disc pl-5 text-gray-700">
              {Object.entries(specifications).map(([key, value]) => (
                <li key={key} className="mb-2">
                  <span className="font-medium">{key}:</span> {value}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductSpecs;

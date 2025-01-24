import { useState } from "react";
export default function PickupLocation() {
  const shippingOptions = [
    {
      id: 1,
      name: "Customer Pick-up",
      description:
        "Shop 173, Railway shopping complex... (Mondays - Saturdays)",
      price: "Free",
    },
    {
      id: 2,
      name: "Capital",
      description:
        "Ikeja (Mondays - Saturdays) in less than 3 hours of purchase...",
      price: "₦1,700",
    },
    {
      id: 3,
      name: "Lagos Mainland",
      description:
        "Iyanaba, Ikotun, Iyanapaja (Delivery takes 3-4 working days)",
      price: "₦4,500",
    },
    {
      id: 4,
      name: "Island",
      description: "Lekki, Osapa (Delivery takes 4-5 working days)",
      price: "₦5,500",
    },
  ];
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelection = (id) => {
    setSelectedOption(id);
  };
  return (
    <div className="bg-white  w-full rounded-md ">
      <ul className="space-y-4">
        {shippingOptions.map((option) => (
          <li
            key={option.id}
            onClick={() => handleSelection(option.id)}
            className={`flex items-start p-4 rounded-md border ${
              selectedOption === option.id
                ? "border-red-500 bg-red-50"
                : "border-gray-300"
            } cursor-pointer`}
          >
            <input
              type="radio"
              name="shipping"
              id={`shipping-${option.id}`}
              checked={selectedOption === option.id}
              onChange={() => handleSelection(option.id)}
              className="mt-1 mr-4 cursor-pointer "
            />
            <div>
              <label
                htmlFor={`shipping-${option.id}`}
                className="block text-sm font-medium text-gray-800"
              >
                {option.name}
              </label>
              <p className="text-sm text-gray-600">{option.description}</p>
            </div>
            <span className="ml-auto font-medium text-gray-800">
              {option.price}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

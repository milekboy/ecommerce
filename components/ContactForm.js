"use client";
import { useState } from "react";
import { CountrySelect, StateSelect } from "react-country-state-city";
export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });
  const [countryid, setCountryid] = useState(0);
  const [stateid, setstateid] = useState(0);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!/^\d{11}$/.test(formData.phoneNumber.trim())) {
      newErrors.phoneNumber = "Please enter a valid 11-digit phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      // Handle form submission here
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="rounded-md shadow-sm space-y-4">
        <div className="flex gap-4 w-full">
          <div className="w-[50%]">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              className={`mt-1 appearance-none relative block w-full px-3 py-2 border ${
                errors.firstName ? "border-red-500" : "border-gray-300"
              } placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            />
            {errors.firstName && (
              <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>
            )}
          </div>
          <div className="w-[50%]">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
              className={`mt-1 appearance-none relative block w-full px-3 py-2 border ${
                errors.lastName ? "border-red-500" : "border-gray-300"
              } placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            />
            {errors.lastName && (
              <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            value={formData.phoneNumber}
            onChange={handleChange}
            className={`mt-1 appearance-none relative block w-full px-3 py-2 border ${
              errors.phoneNumber ? "border-red-500" : "border-gray-300"
            } placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            placeholder="e.g, 080********"
          />
          {errors.phoneNumber && (
            <p className="mt-1 text-sm text-red-500">{errors.phoneNumber}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.mail}
            onChange={handleChange}
            className={`mt-1 appearance-none relative block w-full px-3 py-2 border ${
              errors.phoneNumber ? "border-red-500" : "border-gray-300"
            } placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            placeholder="Enter your Email"
          />
        </div>
        <div>
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Address
          </label>
          <input
            id="address"
            name="address"
            type="text"
            value={formData.address}
            onChange={handleChange}
            className={`mt-1 appearance-none relative block w-full px-3 py-2 border ${
              errors.phoneNumber ? "border-red-500" : "border-gray-300"
            } placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            placeholder="Enter your address"
          />
        </div>
        <div className="lg:flex w-full gap-4">
          <div>
            <h6 className="block text-sm font-medium text-gray-700">Country</h6>
            <div className="border rounded-lg">
              <CountrySelect
                onChange={(e) => {
                  setCountryid(e.id);
                  console.log(e);
                }}
                className="placeholder-gray-500 mt-2"
                placeHolder="Select Country"
              />
            </div>
          </div>
          <div>
            <h6 className="block text-sm font-medium text-gray-700">State</h6>
            <div className="border rounded-lg ">
              <StateSelect
                disabled={!countryid}
                countryid={countryid}
                onChange={(e) => {
                  setstateid(e.id);
                  console.log(e);
                }}
                className="placeholder-gray-500 mt-2  "
                placeHolder="Select State"
              />
            </div>
          </div>
          <div className="">
            <h6 className="block text-sm font-medium text-gray-700">City</h6>
            <input
              id="address"
              name="address"
              type="text"
              value={formData.city}
              onChange={handleChange}
              className={` appearance-none relative block w-full px-3 py-3 border ${
                errors.phoneNumber ? "border-red-500" : "border-gray-300"
              } placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              placeholder="City"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Zip/ Postal code
          </label>
          <input
            id="zip"
            name="zip"
            type="text"
            value={formData.zipCode}
            onChange={handleChange}
            className={`mt-1 appearance-none relative block w-full px-3 py-2 border ${
              errors.phoneNumber ? "border-red-500" : "border-gray-300"
            } placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            placeholder="Zip Code"
          />
        </div>
      </div>

      <div></div>
    </form>
  );
}

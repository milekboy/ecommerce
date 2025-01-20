"use client";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useCart } from "@/app/context/CartProvider";
import ContactForm from "./ContactForm";

export default function CartModal(props) {
  const { cartItems, removeFromCart } = useCart();
  const [step, setStep] = useState(1); // 1: Cart, 2: Shipping, 3: Payment

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  // Calculate cart total
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="fixed inset-0 w-screen bg-black bg-opacity-50 flex justify-end z-50">
      <div className="bg-white h-auto overflow-y-scroll lg:w-[55%] p-6 relative shadow-lg">
        {/* Close Button */}
        <button
          onClick={props.onClick}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          <IoClose className="text-xl font-bold" />
        </button>

        {/* Step Indicator */}
        <div className="flex items-center justify-between mb-6 mt-10">
          {["Cart", "Shipping", "Payment"].map((label, index) => (
            <div
              key={index}
              className={`flex items-center ${
                step > index + 1
                  ? "text-green-500"
                  : step === index + 1
                  ? "text-pink-500"
                  : "text-gray-400"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center border ${
                  step >= index + 1
                    ? "border-green-500 bg-green-100"
                    : "border-gray-300"
                }`}
              >
                {index + 1}
              </div>
              {index < 2 && (
                <div
                  className={`lg:w-56 w-28 h-[1px] ${
                    step > index + 1 ? "bg-green-500" : "bg-gray-300"
                  } mx-2`}
                ></div>
              )}
            </div>
          ))}
        </div>

        {/* Step Content */}
        {step === 1 && (
          <div>
            <h2 className="text-lg font-bold mb-4">Cart</h2>
            {cartItems.length > 0 ? (
              <ul>
                {cartItems.map((item, index) => (
                  <li
                    key={`${item.id}-${index}`} // Combine the ID and index to ensure uniqueness
                    className="flex items-center justify-between mb-4"
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-16 h-16 rounded"
                    />
                    <div className="ml-4 flex-1">
                      <h3 className="text-sm font-semibold">{item.name}</h3>
                      <p className="text-gray-500">
                        {item.quantity} x {Number(item.price).toLocaleString()}
                      </p>
                    </div>
                    <p className="text-gray-500 font-bold">
                      ₦
                      {(
                        Number(item.price) * Number(item.quantity)
                      ).toLocaleString()}{" "}
                    </p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 text-sm hover:underline ml-4"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 text-center">Your cart is empty.</p>
            )}
            {cartItems.length > 0 && (
              <p className="text-lg font-bold mt-4 text-gray-500">
                Total: ₦{cartTotal.toLocaleString()}
              </p>
            )}
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-xl font-bold mb-4">Shipping Address</h2>
            <ContactForm />
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="bg-gray-300 rounded-lg px-4 py-4">
              <ul>
                {cartItems.map((item, index) => (
                  <li
                    key={`${item.id}-${index}`} // Combine the ID and index to ensure uniqueness
                    className="flex items-center justify-between mb-4"
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-16 h-16 rounded"
                    />
                    <div className="ml-4 flex-1">
                      <h3 className="text-sm font-semibold">{item.name}</h3>
                      <p className="text-gray-500">
                        {item.quantity} x {Number(item.price).toLocaleString()}
                      </p>
                    </div>
                    <p className="text-gray-500 font-bold">
                      ₦
                      {(
                        Number(item.price) * Number(item.quantity)
                      ).toLocaleString()}{" "}
                    </p>
                  </li>
                ))}
              </ul>
              <div className="">
                <div className="flex">
                  <p className="font-bold">Shipping Fee</p>{" "}
                  <p className="absolute end-0 me-10 font-extrabold text-gray-600">
                    {" "}
                    ₦0
                  </p>
                </div>
                <div className="flex mt-2">
                  <p className="font-bold">Total Price</p>{" "}
                  <p className="absolute end-0 me-10 font-extrabold">
                    {" "}
                    ₦{cartTotal.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="text-lg font-bold mb-4">Payment</h2>
            <p className="text-gray-500">Select your payment method here.</p>
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between mt-6">
          <button
            onClick={props.onClick}
            className={`px-4 py-2 text-sm font-medium text-gray-600 border rounded `}
          >
            Continue Shopping
          </button>
          {step < 3 ? (
            <button
              onClick={nextStep}
              className="px-4 py-2 text-sm font-medium text-white bg-pink-500 rounded hover:bg-pink-600"
              disabled={cartItems.length === 0}
            >
              Proceed to Checkout
            </button>
          ) : (
            <button
              onClick={() => console.log("Proceed to Checkout")}
              className={`px-4 py-2 text-sm font-medium text-white bg-green-500 rounded hover:bg-green-600 ${
                cartItems.length === 0 && "opacity-50 cursor-not-allowed"
              }`}
              disabled={cartItems.length === 0}
            >
              Proceed to Checkout
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

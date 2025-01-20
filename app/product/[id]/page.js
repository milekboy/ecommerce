"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Thanks from "@/components/Thanks";
import { useState } from "react";
const products = [
  {
    id: 1,
    imageUrl:
      "https://res.cloudinary.com/dbpjskran/image/upload/v1729679003/samples/food/spices.jpg",
    name: "NLT Life Application Study Bible (Black Genuine Leather)",
    price: "20,000",
    available: true,
  },
  {
    id: 2,
    imageUrl:
      "https://res.cloudinary.com/dbpjskran/image/upload/v1729679009/samples/balloons.jpg",
    name: "ESV Study Bible (Hardcover)",
    price: "15,000",
    available: true,
  },
  {
    id: 3,
    imageUrl:
      "https://res.cloudinary.com/dbpjskran/image/upload/v1729679009/samples/breakfast.jpg",
    name: "CSB Tony Evans Study Bible",
    price: "18,000",
    available: false,
  },
  {
    id: 4,
    imageUrl:
      "https://res.cloudinary.com/dbpjskran/image/upload/v1729679007/samples/shoe.jpg",
    name: "KJV Large Print Study Bible",
    price: "22,000",
    available: true,
  },
  {
    id: 5,
    imageUrl:
      "https://res.cloudinary.com/dbpjskran/image/upload/v1729679001/samples/food/pot-mussels.jpg",
    name: "NIV Quest Study Bible",
    price: "19,000",
    available: true,
  },
];

export default function ProductDetails({ params }) {
  const { id } = params;

  const product = products.find((item) => item.id === parseInt(id));
  const [amount, setAmount] = useState(1);
  if (!product) return <p>Product not found</p>;
  const [thanks, setThanks] = useState(true);
  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-50">
        {thanks && (
          <div>
            <Thanks onClick={() => setThanks(false)} />
          </div>
        )}

        <Header />
      </div>
      <div className={thanks ? "pt-60 px-20 " : "pt-52 px-20"}>
        <div className="lg:flex gap-20">
          <div>
            {" "}
            <img
              src={product.imageUrl}
              alt={product.name}
              className="mt-4 w-[500px] rounded-xl"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-700">{product.name}</h1>

            <p className="mt-4 font-bold text-xl text-gray-700">
              {product.price}
            </p>
            <p
              className={`mt-4 ${
                product.available ? "text-green-400" : "text-red-400"
              }`}
            >
              {product.available ? "Available" : "Unavailable"}
            </p>
            <div className=" flex items-center mt-4 gap-6 text-lg">
              <span
                onClick={() =>
                  setAmount((prevAmount) => Math.max(prevAmount - 1, 0))
                }
                className="w-10 h-10 bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-300 rounded-lg"
              >
                -
              </span>
              {amount}
              <span
                onClick={() =>
                  setAmount((prevAmount) => Math.max(prevAmount + 1, 0))
                }
                className="w-10 h-10 bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-300 rounded-lg"
              >
                +
              </span>
            </div>
            <button className="mt-6  bg-red-400  font-semibold text-white py-2 px-4 border  border-transparent rounded-xl w-full">
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

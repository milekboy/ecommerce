"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Thanks from "@/components/Thanks";
import { useCart } from "@/app/context/CartProvider";
import { useState } from "react";
import { use } from "react";

import CartModal from "@/components/CartModal";
import Image from "next/image";

const products = [
  {
    id: 1,
    imageUrl:
      "https://res.cloudinary.com/dbpjskran/image/upload/v1729679003/samples/food/spices.jpg",
    name: "NLT Life Application Study Bible (Black Genuine Leather)",
    price: "20000",
    available: true,
    size: ["sm", "md", "lg"],
    color: ["Red", "Blue", "Green"],
    style: ["Crested", "Plain"],
  },
  {
    id: 2,
    imageUrl:
      "https://res.cloudinary.com/dbpjskran/image/upload/v1729679009/samples/balloons.jpg",
    name: "ESV Study Bible (Hardcover)",
    price: "15000",
    available: true,
  },
  {
    id: 3,
    imageUrl:
      "https://res.cloudinary.com/dbpjskran/image/upload/v1729679009/samples/breakfast.jpg",
    name: "CSB Tony Evans Study Bible",
    price: "18000",
    available: false,
  },
  {
    id: 4,
    imageUrl:
      "https://res.cloudinary.com/dbpjskran/image/upload/v1729679007/samples/shoe.jpg",
    name: "KJV Large Print Study Bible",
    price: "22000",
    available: true,
    size: ["sm", "md", "lg"],
    color: ["Red", "Green"],
    style: ["Crested", "Plain"],
  },
  {
    id: 5,
    imageUrl:
      "https://res.cloudinary.com/dbpjskran/image/upload/v1729679001/samples/food/pot-mussels.jpg",
    name: "NIV Quest Study Bible",
    price: "19000",
    available: true,
  },
];

export default function ProductDetails({ params }) {
  const { addToCart } = useCart();
  const unwrappedParams = use(params);
  const { id } = unwrappedParams;
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("");
  const [thanks, setThanks] = useState(true);
  const [amount, setAmount] = useState(1);
  const [cartOpen, setCartOpen] = useState(false);

  const product = products.find((item) => item.id === parseInt(id));

  if (!product) return <p>Product not found</p>;

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor || !selectedStyle) {
      alert(
        "Please select all options (size, color, and style) before adding to cart."
      );
    }
    for (let i = 0; i < amount; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        imageUrl: product.imageUrl,
        size: selectedSize,
        color: selectedColor,
        style: selectedStyle,
      });
    }
  };

  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-50">
        {thanks && (
          <div>
            <Thanks onClick={() => setThanks(false)} />
          </div>
        )}
        <Header onClick={() => setCartOpen(!cartOpen)} />
      </div>
      {cartOpen && <CartModal onClick={() => setCartOpen(!cartOpen)} />}
      <div className={thanks ? "pt-60 px-20" : "pt-52 px-20"}>
        <div className="lg:flex gap-20">
          <div>
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={500}
              height={500}
              className="mt-4 rounded-xl"
            />
          </div>
          <div className="lg:w-80">
            <h1 className="text-2xl font-bold text-gray-700">{product.name}</h1>
            <div className="mt-4 space-y-2">
              {product.size && (
                <select
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  className="w-full p-2 border rounded-lg"
                >
                  <option value="" hidden>
                    Size
                  </option>
                  {product.size.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              )}
              {product.size && (
                <select
                  value={selectedColor}
                  onChange={(e) => setSelectedColor(e.target.value)}
                  className="w-full p-2 border rounded-lg"
                >
                  <option value="" hidden>
                    Colour
                  </option>
                  {product.color.map((color) => (
                    <option key={color} value={color}>
                      {color}
                    </option>
                  ))}
                </select>
              )}
              {product.style && (
                <select
                  value={selectedStyle}
                  onChange={(e) => setSelectedStyle(e.target.value)}
                  className="w-full p-2 border rounded-lg"
                >
                  <option value="" hidden>
                    Style
                  </option>
                  {product.style.map((style) => (
                    <option key={style} value={style}>
                      {style}
                    </option>
                  ))}
                </select>
              )}
            </div>
            <p className="mt-4 font-bold text-xl text-gray-700">
              ₦{Number(product.price).toLocaleString()}
            </p>
            <p
              className={`mt-4 ${
                product.available ? "text-green-400" : "text-red-400"
              }`}
            >
              {product.available ? "Available" : "Unavailable"}
            </p>
            <div className="flex items-center mt-4 gap-6 text-lg">
              <span
                onClick={() =>
                  setAmount((prevAmount) => Math.max(prevAmount - 1, 1))
                }
                className="w-10 h-10 bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-300 rounded-lg"
              >
                -
              </span>
              {amount}
              <span
                onClick={() => setAmount((prevAmount) => prevAmount + 1)}
                className="w-10 h-10 bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-300 rounded-lg"
              >
                +
              </span>
            </div>
            <button
              onClick={handleAddToCart}
              disabled={!product.available}
              className={`mt-6 font-semibold text-white py-2 px-4 border border-transparent rounded-xl w-full
                ${
                  product.available
                    ? "bg-red-400 hover:bg-red-500"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
            >
              {product.available ? "Add to Cart" : "Out of Stock"}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

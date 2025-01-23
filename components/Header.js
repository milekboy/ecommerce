"use client";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import Image from "next/image";
import { useCart } from "@/app/context/CartProvider";
import { useRouter } from "next/navigation";

export default function Header(props) {
  const { cartItems } = useCart();
  const router = useRouter();
  const cartTotal = cartItems.reduce((total, item) => total + item.quantity, 0);

  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const products = [
    { id: 1, name: "NLT Life Application Study Bible" },
    { id: 2, name: "ESV Study Bible (Hardcover)" },
    { id: 3, name: "CSB Tony Evans Study Bible" },
    { id: 4, name: "KJV Large Print Study Bible" },
    { id: 5, name: "NIV Quest Study Bible" },
  ];

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchInput(value);

    // Filter suggestions based on input
    if (value.trim()) {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (id) => {
    router.push(`/product/${id}`);
    setSearchInput("");
    setSuggestions([]);
  };

  return (
    <div className="h-36 px-10 flex items-center bg-slate-100 shadow-xl">
      <div className="flex lg:gap-10 gap-2">
        <Image
          className="mt-4 cursor-pointer"
          src="https://res.cloudinary.com/dbpjskran/image/upload/v1729679001/samples/ecommerce/shoes.png"
          width="100"
          height="100"
          alt="logo"
        />
        <div className="relative flex mt-7 border-2 lg:w-[900px] px-4 bg-gray-200 rounded-3xl h-10">
          <input
            placeholder="search"
            type="text"
            className="w-[95%] bg-gray-200 focus:outline-none"
            value={searchInput}
            onChange={handleSearch}
          />
          <FaSearch className="text-gray-400 mt-2 cursor-pointer" />

          {suggestions.length > 0 && (
            <div className="cursor-pointer h-auto absolute top-12 left-0 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10">
              {suggestions.map((product) => (
                <div
                  key={product.id}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSuggestionClick(product.id)}
                >
                  {product.name}
                </div>
              ))}
            </div>
          )}
        </div>
        <div onClick={props.onClick} className="relative cursor-pointer">
          <MdOutlineShoppingCart className="text-2xl mt-8 " />
          <div className="absolute top-4 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
            {cartTotal}
          </div>
        </div>
      </div>
    </div>
  );
}

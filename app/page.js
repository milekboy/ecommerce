"use client";
import { useState } from "react";
import Link from "next/link";
import Thanks from "@/components/Thanks";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import CartModal from "@/components/CartModal";

export default function Home() {
  const products = [
    {
      id: 1,
      imageUrl:
        "https://res.cloudinary.com/dbpjskran/image/upload/v1729679003/samples/food/spices.jpg",
      name: "NLT Life Application Study Bible ",
      price: "20000",
    },
    {
      id: 2,
      imageUrl:
        "https://res.cloudinary.com/dbpjskran/image/upload/v1729679003/samples/food/spices.jpg",
      name: "ESV Study Bible (Hardcover)",
      price: "15000",
    },
    {
      id: 3,
      imageUrl:
        "https://res.cloudinary.com/dbpjskran/image/upload/v1729679003/samples/food/spices.jpg",
      name: "CSB Tony Evans Study Bible",
      price: "18000",
    },
    {
      id: 4,
      imageUrl:
        "https://res.cloudinary.com/dbpjskran/image/upload/v1729679003/samples/food/spices.jpg",
      name: "KJV Large Print Study Bible",
      price: "22000",
    },
    {
      id: 5,
      imageUrl:
        "https://res.cloudinary.com/dbpjskran/image/upload/v1729679003/samples/food/spices.jpg",
      name: "NIV Quest Study Bible",
      price: "19000",
    },
  ];
  const [thanks, setThanks] = useState(true);
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <div className="font-[family-name:var(--font-geist-sans)] flex flex-col min-h-screen">
      <div className="fixed top-0 left-0 w-full z-50">
        {thanks && (
          <div>
            <Thanks onClick={() => setThanks(false)} />
          </div>
        )}

        <Header onClick={() => setCartOpen(!cartOpen)} />
      </div>
      {cartOpen && <CartModal onClick={() => setCartOpen(!cartOpen)} />}
      <div className={thanks ? "pt-44" : "pt-36"}>
        <div className="bg-[url('https://res.cloudinary.com/dbpjskran/image/upload/v1729679002/samples/ecommerce/leather-bag-gray.jpg')] bg-cover bg-center h-64 w-full flex justify-center items-center">
          <p className=" text-center pt-10 text-2xl font-bold w-96">
            12 Adeola Odeku Street, Victoria Island, Lagos, Nigeria.
          </p>
        </div>
        <div className="mt-10 lg:px-10 px-2 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((product) => (
            <ProductCard
              href={`/product/${product.id}`}
              key={product.id}
              id={product.id}
              imageUrl={product.imageUrl}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
}

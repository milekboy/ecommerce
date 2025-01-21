import { FaSearch } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import Image from "next/image";
import { useCart } from "@/app/context/CartProvider";

export default function (props) {
  const { cartItems } = useCart();

  const cartTotal = cartItems.reduce((total, item) => total + item.quantity, 0);

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
        <div className="flex mt-7 border-2 lg:w-[900px] px-4 bg-gray-200 rounded-3xl h-10">
          <input
            placeholder="search"
            type="text"
            className="w-[95%] bg-gray-200 focus:outline-none"
          />
          <FaSearch className="text-gray-400 mt-2 cursor-pointer" />
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

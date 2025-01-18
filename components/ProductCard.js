import Image from "next/image";

export default function ProductCard({ imageUrl, name, price }) {
  return (
    <div className="lg:w-64 cursor-pointer h-[460px] hover:shadow-2xl rounded-lg px-2 py-2 flex items-center justify-center">
      <div>
        <div className="h-">
          <Image src={imageUrl} width="250" height="100" alt={name} />
        </div>

        <p className="mt-2">{name}</p>
        <p className="mt-6 font-bold">{price}</p>
        <button className="mt-6 bg-transparent hover:bg-red-400 text-red-300 font-semibold hover:text-white py-2 px-4 border border-red-300 hover:border-transparent rounded-xl w-full">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

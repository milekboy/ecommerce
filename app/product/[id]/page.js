import Header from "@/components/Header";

const products = [
  {
    id: 1,
    imageUrl:
      "https://res.cloudinary.com/dbpjskran/image/upload/v1729679003/samples/food/spices.jpg",
    name: "NLT Life Application Study Bible (Black Genuine Leather)",
    price: "₦20,000",
  },
  {
    id: 2,
    imageUrl:
      "https://res.cloudinary.com/dbpjskran/image/upload/v1729679009/samples/balloons.jpg",
    name: "ESV Study Bible (Hardcover)",
    price: "₦15,000",
  },
  {
    id: 3,
    imageUrl:
      "https://res.cloudinary.com/dbpjskran/image/upload/v1729679009/samples/breakfast.jpg",
    name: "CSB Tony Evans Study Bible",
    price: "₦18,000",
  },
  {
    id: 4,
    imageUrl:
      "https://res.cloudinary.com/dbpjskran/image/upload/v1729679007/samples/shoe.jpg",
    name: "KJV Large Print Study Bible",
    price: "₦22,000",
  },
  {
    id: 5,
    imageUrl:
      "https://res.cloudinary.com/dbpjskran/image/upload/v1729679001/samples/food/pot-mussels.jpg",
    name: "NIV Quest Study Bible",
    price: "₦19,000",
  },
];

export default function ProductDetails({ params }) {
  const { id } = params;

  const product = products.find((item) => item.id === parseInt(id));

  if (!product) return <p>Product not found</p>;

  return (
    <div>
      <Header />
      <div className="p-10">
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <img src={product.imageUrl} alt={product.name} className="mt-4 w-96" />
        <p className="mt-4">{product.description}</p>
        <p className="mt-4 font-bold text-xl">{product.price}</p>
      </div>
    </div>
  );
}

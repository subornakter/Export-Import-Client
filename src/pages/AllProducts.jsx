import { useLoaderData } from "react-router";
import { useState } from "react";
import { ProductCard } from "../components/ProductCard";
import Loader from "../components/Loading";

const AllProducts = () => {
  const data = useLoaderData();
  const [products, setProducts] = useState(data);
  const [loading, setLoading] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    const search_text = e.target.search.value.trim();
    if (!search_text) return;
    setLoading(true);
    fetch(`http://localhost:5000/search?search=${search_text}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  return (
    <div >
      <div className="text-2xl text-center font-bold">All Products</div>
      <title>Alpha Global Trade - All Products</title>
      <p className="text-center">Explore world best Imported Products.</p>
      <form onSubmit={handleSearch} className="mt-5 mb-10 flex gap-2 justify-center">
        <label className="input rounded-md">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input name="search" type="search" placeholder="Search" />
        </label>
        <button className="btn text-white bg-gradient-to-r from-pink-500 to-red-600 hover:from-red-600 hover:to-pink-500">
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      {loading ? (
        <div className="flex justify-center items-center min-h-[40vh]">
          <Loader />
        </div>
      ) : (
        <div className="  max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">
              No products found.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default AllProducts;

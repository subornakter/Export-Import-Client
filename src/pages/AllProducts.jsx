import { useLoaderData } from "react-router";
import { useState, useEffect } from "react";
import { ProductCard } from "../components/ProductCard";
import Loader from "../components/Loading";
import { FaSearch, FaSortAmountDown, FaSortAmountUp } from "react-icons/fa";

const ITEMS_PER_PAGE = 8;

const AllProducts = () => {
  const data = useLoaderData();

  const [allProducts, setAllProducts] = useState(data);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortAsc, setSortAsc] = useState(false);

  // Pagination Logic
  useEffect(() => {
    let filtered = [...allProducts];

    if (sortAsc) {
      filtered.sort((a, b) => a.price - b.price);
    }

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    setProducts(filtered.slice(startIndex, endIndex));
  }, [allProducts, currentPage, sortAsc]);

  const totalPages = Math.ceil(allProducts.length / ITEMS_PER_PAGE);

  // Search
  const handleSearch = (e) => {
    e.preventDefault();
    const search_text = e.target.search.value.trim();
    if (!search_text) return;

    setLoading(true);
    fetch(
      `https://import-export-server-lac.vercel.app/search?search=${search_text}`
    )
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
        setCurrentPage(1);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  // Price Filter
  const handlePriceFilter = (e) => {
    e.preventDefault();
    const min = Number(minPrice) || 0;
    const max = Number(maxPrice) || Infinity;

    const filtered = data.filter(
      (product) => product.price >= min && product.price <= max
    );

    setAllProducts(filtered);
    setCurrentPage(1);
  };

  return (
    <div>
      <div className="text-2xl text-center font-bold">All Products</div>
      <title>Alpha Global Trade - All Products</title>
      <p className="text-center">Explore world best Imported Products.</p>

      {/* 🔍 Search */}
     {/* 🔍 Search */} <form onSubmit={handleSearch} className="mt-5 mb-5 flex gap-2 justify-center" > <label className="input rounded-md"> <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" > <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor" > <circle cx="11" cy="11" r="8"></circle> <path d="m21 21-4.3-4.3"></path> </g> </svg> <input name="search" type="search" placeholder="Search" /> </label> <button className="btn text-white bg-gradient-to-r from-pink-500 to-red-600"> Search </button> </form>

      {/* 💰 Price Filter + Sort */}
      <form
        onSubmit={handlePriceFilter}
        className="flex gap-2 justify-center mb-10 items-center flex-wrap"
      >
        <input
          type="number"
          placeholder="Min Price"
          className="input input-bordered"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Max Price"
          className="input input-bordered"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
        <button className="btn bg-gradient-to-r from-green-400 to-blue-500 text-white flex items-center gap-2">
          Filter
        </button>

        {/* Sort Button */}
        <button
          type="button"
          onClick={() => setSortAsc(!sortAsc)}
          className="btn bg-gradient-to-r from-yellow-400 to-orange-500 text-white flex items-center gap-2"
        >
          {sortAsc ? (
            <>
              <FaSortAmountUp /> Price: Low → High
            </>
          ) : (
            <>
              <FaSortAmountDown /> Price: High → Low
            </>
          )}
        </button>
      </form>

      {/* Loader / Products */}
      {loading ? (
        <div className="flex justify-center items-center min-h-[40vh]">
          <Loader />
        </div>
      ) : (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10">
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

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-10 flex-wrap">
          {[...Array(totalPages).keys()].map((num) => (
            <button
              key={num}
              onClick={() => setCurrentPage(num + 1)}
              className={`btn btn-sm bg-gradient-to-r from-pink-500 to-red-600 text-white ${
                currentPage === num + 1 ? "ring-2 ring-yellow-400" : ""
              }`}
            >
              {num + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllProducts;




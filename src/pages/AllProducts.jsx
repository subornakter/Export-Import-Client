import { useLoaderData } from "react-router";

import { useState } from "react";
import { ProductCard } from "../components/ProductCard";

const AllProducts = () => {
  const data = useLoaderData();
  console.log(data);
   const [products, setProducts] = useState(data)
  const [loading, setLoading] = useState(false)

  const handleSearch = (e) => {
    e.preventDefault()
    const search_text = e.target.search.value
    console.log(search_text)
    setLoading(true)

    fetch(`http://localhost:5000/search?search=${search_text}`)
    .then(res=> res.json())
    .then(data=> {
      console.log(data)
      setProducts(data)
      setLoading(false)
    })
  }



  


  return (
    <div>
      <div className="text-2xl text-center font-bold"> All Products</div>
      <title>Alpha Global Trade - allProducts</title>
      <p className=" text-center ">Explore world best Imported Products.</p>
     
     
     <form onSubmit={handleSearch} className=" mt-5 mb-10 flex gap-2 justify-center">
       <label className="input rounded-md ">
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
        <input name="search" type="search"  placeholder="Search" />
      </label>
      <button className="btn text-white bg-linear-to-r from-pink-500 to-red-600 hover:from-red-600 hover:to-pink-500 ">{loading ? "Searching...." : "Search"}</button>
     </form>

      <div className="grid grid-cols-3 lg:grid-cols-4 gap-3 mt-10">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
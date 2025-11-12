import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { ProductCard } from "../components/ProductCard";
import Banner from "../components/Banner";
import ExtraSection from "../components/ExtraSection";
import Loader from "../components/Loading";
import TeamSection from "../components/TeamSection";
const Home = () => {
  const data = useLoaderData();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (data) {
      // Optional delay to simulate loading effect
      setTimeout(() => {
        setProducts(data);
        setLoading(false);
      }, 800);
    }
  }, [data]);

  return (
    <div>
      <title>Alpha Global Trade - Home</title>
      <Banner />

      <div className="text-center text-xl font-bold mt-10 mb-5">
        Latest Products
      </div>

      {/* Only product section will show loader */}
      {loading ? (
        <div className="flex justify-center items-center min-h-[40vh]">
          <Loader />
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mt-10">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
      <TeamSection></TeamSection> 
      <ExtraSection />
    </div>
  );
};

export default Home;

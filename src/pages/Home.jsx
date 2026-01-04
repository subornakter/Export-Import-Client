import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { ProductCard } from "../components/ProductCard";
import Banner from "../components/Banner";
import ExtraSection from "../components/ExtraSection";
import Loader from "../components/Loading";
import TeamSection from "../components/TeamSection";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import FAQSection from "../components/FAQSection";
import NewsletterSection from "../components/NewsletterSection";
import Testimonials from "../components/Testimonials";
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

      <div className="text-center mt-10 mb-5">
        <h1 className="text-3xl font-semibold "> Latest Products</h1>
    
        <p className="text-gray-500 mb-8">
  Explore our newest arrivals — quality products sourced from trusted global partners.
</p>

      </div>

      {/* Only product section will show loader */}
      {loading ? (
        <div className="flex justify-center items-center min-h-[40vh]">
          <Loader />
        </div>
      ) : (
        <div className="grid max-w-7xl mx-auto  grid-cols-1 lg:grid-cols-3 gap-3 mt-10">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
      <TeamSection></TeamSection>
      <WhyChooseUsSection/> 
      <ExtraSection />
      <Testimonials />
      <FAQSection />
      <NewsletterSection />
    </div>
  );
};

export default Home;

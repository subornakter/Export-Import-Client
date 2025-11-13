import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { Link } from "react-router";
import Loader from "../components/Loading";
import { motion } from "framer-motion";

const MyImports = () => {
  const { user } = useContext(AuthContext);
  const [imports, setImports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;
    fetch(`http://localhost:5000/myImports?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setImports(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [user]);

  const handleRemove = (id) => {
    fetch(`http://localhost:5000/myImports/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Product removed successfully!");
          setImports(imports.filter((item) => item._id !== id));
        }
      })
      .catch((err) => console.error(err));
  };

  if (loading) return <Loader />;

  return (
    <div className="max-w-7xl mx-auto px-4 mt-10">
      <title>Alpha Global Trade - MyImports</title>

      {/* Page title */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-center">My Imported Products</h2>
      </div>

      {imports.length === 0 ? (
        <p className="text-center text-gray-500">No imports yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {imports.map((product, index) => (
            <motion.div
              key={product._id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="card bg-base-100 shadow-lg border border-gray-200 hover:shadow-2xl transition-all rounded-xl"
            >
              <figure className="h-56 overflow-hidden">
                <motion.img
                  src={product.productImage}
                  alt={product.productName}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </figure>

              <div className="card-body p-5">
                <h2 className="card-title text-lg font-bold">
                  {product.productName}
                </h2>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Origin Country:</span>{" "}
                  {product.originCountry}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Imported Quantity:</span>{" "}
                  {product.quantity}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Rating:</span> ⭐{" "}
                  {product.rating}
                </p>

                <div className="flex justify-between items-center mt-3">
                  <p className="text-lg font-bold text-pink-600">
                    <span className="text-gray-600">Price: </span>${product.price}
                  </p>

                  {/* Beautiful gradient See Details button */}
                  <Link
                    to={`/product-details/${product.productId}`}
                    className="btn btn-sm bg-gradient-to-r from-pink-500 to-red-600 text-white rounded-md font-semibold transition-all duration-300 hover:from-red-500 hover:to-pink-600 hover:scale-105"
                  >
                    See Details
                  </Link>
                </div>

                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleRemove(product._id)}
                  className="btn btn-sm w-full mt-3 rounded-md btn-primary text-white transition-all duration-300"
                >
                  Remove
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyImports;


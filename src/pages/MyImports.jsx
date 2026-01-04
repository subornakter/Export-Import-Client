import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { Link } from "react-router";
import Loader from "../components/Loading";
import { FaTrashAlt, FaEye } from "react-icons/fa";

const MyImports = () => {
  const { user } = useContext(AuthContext);
  const [imports, setImports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;
    fetch(
      `https://import-export-server-lac.vercel.app/myImports?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setImports(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [user]);

  const handleRemove = (id) => {
    fetch(`https://import-export-server-lac.vercel.app/myImports/${id}`, {
      method: "DELETE",
    })
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
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-center">My Imported Products</h2>
      </div>

      {imports.length === 0 ? (
        <p className="text-center text-gray-500">No imports yet.</p>
      ) : (
        <>
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead className="bg-base-200">
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Origin</th>
                  <th>Quantity</th>
                  <th>Rating</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {imports.map((product, index) => (
                  <tr key={product._id}>
                    <td>{index + 1}</td>
                    <td>
                      <img
                        src={product.productImage}
                        alt={product.productName}
                        className="w-16 h-16 rounded object-cover"
                      />
                    </td>
                    <td className="font-semibold">{product.productName}</td>
                    <td>{product.originCountry}</td>
                    <td>{product.quantity}</td>
                    <td>⭐ {product.rating}</td>
                    <td className="text-pink-600 font-bold">${product.price}</td>
                    <td className="flex gap-2">
                      <Link
                        to={`/product-details/${product.productId}`}
                        className="btn btn-sm btn-primary flex items-center gap-2 text-white"
                      >
                        <FaEye />
                        Details
                      </Link>
                      <button
                        onClick={() => handleRemove(product._id)}
                        className="btn btn-sm btn-primary flex items-center gap-2 text-white"
                      >
                        <FaTrashAlt />
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden grid grid-cols-1 gap-4">
            {imports.map((product) => (
              <div
                key={product._id}
                className="card bg-base-100 shadow-md rounded-xl border border-gray-200 p-4"
              >
                <img
                  src={product.productImage}
                  alt={product.productName}
                  className="w-full h-48 object-cover rounded-lg mb-3"
                />
                <h3 className="font-bold text-lg">{product.productName}</h3>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Origin:</span> {product.originCountry}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Quantity:</span> {product.quantity}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Rating:</span> ⭐ {product.rating}
                </p>
                <p className="text-sm text-pink-600 font-bold">
                  <span className="font-semibold text-gray-600">Price:</span> ${product.price}
                </p>
                <div className="flex gap-2 mt-3">
                  <Link
                    to={`/product-details/${product.productId}`}
                    className="btn btn-sm btn-primary flex-1 flex items-center gap-2 text-white justify-center"
                  >
                    <FaEye /> Details
                  </Link>
                  <button
                    onClick={() => handleRemove(product._id)}
                    className="btn btn-sm btn-error flex-1 flex items-center gap-2 text-white justify-center"
                  >
                    <FaTrashAlt /> Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MyImports;


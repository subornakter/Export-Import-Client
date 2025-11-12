import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';
import { Link } from 'react-router';
import Loader from '../components/Loading';

const MyImports = () => {
  const { user } = use(AuthContext);
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
    fetch(`http://localhost:5000/myImports/${id}`, { method: 'DELETE' })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success('Product removed successfully!');
          setImports(imports.filter((item) => item._id !== id));
        }
      })
      .catch((err) => console.error(err));
  };

  if (loading) return <Loader />;

  return (
    <div className="max-w-7xl mx-auto px-4 mt-10">
      <title>Alpha Global Trade - MyImports</title>
      <h2 className="text-3xl font-bold mb-6 text-center text-primary">
        My Imported Products
      </h2>

      {imports.length === 0 ? (
        <p className="text-center text-gray-500">No imports yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {imports.map((product) => (
            <div
              key={product._id}
              className="card bg-base-100 shadow-lg border border-gray-200 hover:shadow-2xl transition-all rounded-xl"
            >
              <figure className="h-56 overflow-hidden">
                <img
                  src={product.productImage}
                  alt={product.productName}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </figure>

              <div className="card-body p-5">
                <h2 className="card-title text-lg font-bold">
                  {product.productName}
                </h2>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Origin:</span> {product.originCountry}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Rating:</span> {product.rating}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Imported Quantity:</span>{' '}
                  {product.quantity}
                </p>

                <div className="flex justify-between items-center mt-3">
                  <p className="text-lg font-bold text-pink-600">${product.price}</p>

                  <Link
                    to={`/product-details/${product.productId}`}
                    className="btn btn-sm bg-gradient-to-r from-pink-500 to-red-600 text-white rounded-full"
                  >
                    See Details
                  </Link>
                </div>

                <button
                  onClick={() => handleRemove(product._id)}
                  className="btn btn-sm w-full mt-3 rounded-full border-red-500 text-red-600 hover:bg-red-600 hover:text-white"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyImports;

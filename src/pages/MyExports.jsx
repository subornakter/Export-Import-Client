import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import Loader from "../components/Loading";

const MyExports = () => {
  const { user } = useContext(AuthContext);
  const [myExports, setMyExports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null); // For update modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 🔹 Fetch all exports by logged-in user
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/myExports?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setMyExports(data);
          setLoading(false);
        })
        .catch(() => toast.error("Failed to load exports"));
    }
  }, [user]);

  // 🔹 Handle Delete
  const handleDelete = (id) => {
    if (!confirm("Are you sure you want to delete this product?")) return;

    fetch(`http://localhost:5000/myExports/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then(() => {
        toast.success("Product deleted successfully!");
        setMyExports((prev) => prev.filter((p) => p._id !== id));
      })
      .catch(() => toast.error("Failed to delete product"));
  };

  // 🔹 Handle Update
  const handleUpdateSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const updatedData = {
      productName: form.productName.value,
      productImage: form.productImage.value,
      price: parseFloat(form.price.value),
      originCountry: form.originCountry.value,
      rating: parseFloat(form.rating.value),
      availableQuantity: parseInt(form.availableQuantity.value),
      description: form.description.value,
    };

    fetch(`http://localhost:5000/myExports/${selectedProduct._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Product updated successfully!");
        setMyExports((prev) =>
          prev.map((p) =>
            p._id === selectedProduct._id ? { ...p, ...updatedData } : p
          )
        );
        setIsModalOpen(false);
        setSelectedProduct(null);
      })
      .catch(() => toast.error("Failed to update product"));
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
    <title>Alpha Global Trade - MyExports</title>  
      <h2 className="text-3xl font-bold text-center mb-8">My Exported Products</h2>

      {myExports.length === 0 ? (
        <p className="text-center text-gray-500">
          You haven’t added any export products yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {myExports.map((product) => (
            <div
              key={product._id}
              className="card bg-base-100 shadow-lg hover:shadow-xl transition-all rounded-2xl border border-gray-200"
            >
              <figure className="h-52 overflow-hidden">
                <img
                  src={product.productImage}
                  alt={product.productName}
                  className="w-full h-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-xl">{product.productName}</h2>
                <p className="text-gray-600 text-sm">{product.originCountry}</p>
                <p className="font-bold text-pink-600">${product.price}</p>
                <p className="text-sm">
                  <span className="font-semibold">Rating:</span> ⭐ {product.rating}
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Available:</span>{" "}
                  {product.availableQuantity}
                </p>

                <div className="flex justify-between mt-4">
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="btn btn-sm bg-red-500 text-white rounded-full hover:bg-red-600"
                  >
                    Delete
                  </button>

                  <button
                    onClick={() => {
                      setSelectedProduct(product);
                      setIsModalOpen(true);
                    }}
                    className="btn btn-sm bg-pink-500 text-white rounded-full hover:bg-pink-600"
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Update Modal */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-xl w-[90%] max-w-lg">
            <h3 className="text-xl font-bold mb-4 text-center">Update Product</h3>

            <form onSubmit={handleUpdateSubmit} className="space-y-3">
              <input
                name="productName"
                defaultValue={selectedProduct.productName}
                className="input input-bordered w-full rounded-full"
              />
              <input
                name="productImage"
                defaultValue={selectedProduct.productImage}
                className="input input-bordered w-full rounded-full"
              />
              <input
                type="number"
                step="0.01"
                name="price"
                defaultValue={selectedProduct.price}
                className="input input-bordered w-full rounded-full"
              />
              <input
                name="originCountry"
                defaultValue={selectedProduct.originCountry}
                className="input input-bordered w-full rounded-full"
              />
              <input
                type="number"
                step="0.1"
                min="1"
                max="5"
                name="rating"
                defaultValue={selectedProduct.rating}
                className="input input-bordered w-full rounded-full"
              />
              <input
                type="number"
                name="availableQuantity"
                defaultValue={selectedProduct.availableQuantity}
                className="input input-bordered w-full rounded-full"
              />
              <textarea
                name="description"
                defaultValue={selectedProduct.description}
                className="textarea textarea-bordered w-full rounded-2xl"
              />

              <div className="flex justify-between gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="btn w-1/2 border-gray-300 rounded-full"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn w-1/2 text-white rounded-full bg-gradient-to-r from-pink-500 to-red-600 hover:from-pink-600 hover:to-red-700"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyExports;

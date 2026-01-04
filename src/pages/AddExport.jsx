import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { Navigate } from "react-router";

const AddExport = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      productName: e.target.productName.value,
      productImage: e.target.productImage.value,
      description: e.target.description.value,
      price: parseFloat(e.target.price.value),
      originCountry: e.target.originCountry.value,
      rating: parseFloat(e.target.rating.value),
      availableQuantity: parseInt(e.target.availableQuantity.value),
      addedBy: user?.email || "anonymous",
    };

    fetch(`https://import-export-server-lac.vercel.app/allProducts?email=${user?.email}`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(newProduct),
})

      .then((res) => res.json())
      .then((data) => {
        toast.success("Successfully added!");
        //    Navigate("/allProducts")
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="card border border-gray-200 bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl my-10">
      <title>Alpha Global Trade - addExport</title>
      <div className="card-body p-6">
        <h2 className="text-2xl font-bold text-center mb-6">
          Add New Export Product
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Product Name */}
          <div>
            <label className="label font-medium">Product Name</label>
            <input
              type="text"
              name="productName"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter product name"
            />
          </div>

          {/* Product Image URL */}
          <div>
            <label className="label font-medium">Product Image (URL)</label>
            <input
              type="url"
              name="productImage"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          {/* Description */}
          <div>
            <label className="label font-medium">Description</label>
            <textarea
              name="description"
              rows="3"
              required
              className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200"
              placeholder="Enter product description"
            ></textarea>
          </div>

          {/* Price */}
          <div>
            <label className="label font-medium">Price ($)</label>
            <input
              type="number"
              step="0.01"
              min="0"
              name="price"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter price"
            />
          </div>

          {/* Origin Country */}
          <div>
            <label className="label font-medium">Origin Country</label>
            <input
              type="text"
              name="originCountry"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="e.g., France, Bangladesh, China"
            />
          </div>

          {/* Rating */}
          <div>
            <label className="label font-medium">Rating (1-5)</label>
            <input
              type="number"
              name="rating"
              step="0.1"
              min="1"
              max="5"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter rating"
            />
          </div>

          {/* Available Quantity */}
          <div>
            <label className="label font-medium">Available Quantity</label>
            <input
              type="number"
              name="availableQuantity"
              min="1"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter available quantity"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-full text-white mt-6 rounded-full bg-gradient-to-r from-pink-500 to-red-600 hover:from-pink-600 hover:to-red-700"
          >
            Add Export
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddExport;

import { useContext, useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [importModalOpen, setImportModalOpen] = useState(false);
  const [importQty, setImportQty] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/allProducts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to load product details!");
      });
  }, [id]);
   useEffect(() => {
  if (product) {
    document.title = `ProductDetails | ${product.productName}`;
  }
}, [product]);

  const handleImport = (e) => {
    e.preventDefault();

    const quantity = parseInt(importQty);

    if (!user) {
      toast.error("Please login to import products!");
      navigate("/login");
      return;
    }

    if (quantity > product.availableQuantity) {
      toast.error("Import quantity cannot exceed available quantity!");
      return;
    }

    const importData = {
      productId: product._id,
      productName: product.productName,
      productImage: product.productImage,
      price: product.price,
      originCountry: product.originCountry,
      rating: product.rating,
      quantity,
      addedBy: user.email,
      importedAt: new Date(),
    };

    // const toastId = toast.loading("Importing product...");

 
    fetch("http://localhost:5000/myImports", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(importData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      
        return fetch(`http://localhost:5000/allProducts/${product._id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ quantity }),
        });
      })
      .then((res) => res.json())
      .then(() => {
       toast.success("Product Imported SuccessFully")

        // Update local state instantly
        setProduct((prev) => ({
          ...prev,
          availableQuantity: Number(prev.availableQuantity )- quantity,
        }));

        setImportQty("");
        setImportModalOpen(false);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to import product!");
      });
  };

  if (loading) {
    return <div className="text-center mt-10 text-lg font-semibold">Loading...</div>;
  }

  if (!product) {
    return <div className="text-center mt-10 text-red-500">Product not found.</div>;
  }



  return (
    <div className="max-w-5xl mx-auto p-6 my-8">
      <div className="card bg-base-100 shadow-2xl rounded-2xl border border-gray-200 overflow-hidden">
        <div className="flex flex-col md:flex-row gap-8 p-6">
          <div className="w-full md:w-1/2">
            <img
              src={product.productImage}
              alt={product.productName}
              className="rounded-xl w-full object-cover shadow-md"
            />
          </div>

          <div className="w-full md:w-1/2 space-y-4">
            <h1 className="text-3xl font-bold text-gray-800">
              {product.productName}
            </h1>

            <p className="text-gray-600 text-lg">{product.description}</p>

            <div className="grid grid-cols-2 gap-4 text-gray-700 mt-4">
              <p>
                <span className="font-semibold">Price:</span> ${product.price}
              </p>
              <p>
                <span className="font-semibold">Origin:</span> {product.originCountry}
              </p>
              <p>
                <span className="font-semibold">Rating:</span> ⭐ {product.rating}
              </p>
              <p>
                <span className="font-semibold">Available:</span>{" "}
                {product.availableQuantity}
              </p>
            </div>

            <div className="flex gap-4 mt-6">
              <button
                onClick={() => setImportModalOpen(true)}
                className="btn w-full text-white bg-gradient-to-r from-pink-500 to-red-600 hover:from-pink-600 hover:to-red-700 rounded-full"
              >
                Import Now
              </button>

              <Link
                to="/allProducts"
                className="btn w-full border border-gray-300 rounded-full hover:bg-gray-200"
              >
                Back to Products
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Import Modal */}
      {importModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-[90%] max-w-md">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Import Product
            </h2>

            <form onSubmit={handleImport} className="space-y-4">
              <div>
                <label className="label font-medium">Enter Quantity</label>
                <input
                  type="number"
                  value={importQty}
                  min="1"
                  max={product.availableQuantity}
                  onChange={(e) => setImportQty(e.target.value)}
                  className="input w-full rounded-full focus:outline-gray-200"
                  placeholder={`Max: ${product.availableQuantity}`}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={
                  !importQty ||
                  parseInt(importQty) <= 0 ||
                  parseInt(importQty) > product.availableQuantity
                }
                className={`btn w-full rounded-full text-white ${
                  parseInt(importQty) > product.availableQuantity
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-pink-500 to-red-600 hover:from-pink-600 hover:to-red-700"
                }`}
              >
                Submit Import
              </button>

              <button
                type="button"
                onClick={() => setImportModalOpen(false)}
                className="btn w-full rounded-full border-gray-300"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;

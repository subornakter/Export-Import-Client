import { Link } from "react-router";

export const ProductCard = ({product}) => {
    const {productName, productImage, originCountry, rating, _id, availableQuantity,price} = product;
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <figure className="h-60 overflow-hidden">
        <img
          src={productImage}
          alt={productName}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{productName}</h2>
        {/* <div className="badge text-xs badge-xs badge-secondary rounded-full">{category}</div> */}
        <div className="text-xs font-bold text-secondary"><span className="font-semibold">OriginCountry: </span>{originCountry}</div>
        <p className="line-clamp-1 font-semibold">
            {availableQuantity} <span className="text-yellow-600">Pieces Available</span>
        </p>
      <div className="flex justify-between">
          <p className="font-bold text-lg text-primary">
            
            ${price}
        </p>
        <p className="text-sm font-bold text-base-content/70"><span className="font-semibold">rating: </span>{rating}</p>
      </div>
        <div className="card-actions justify-between items-center mt-4">
          <div className="flex gap-4 text-sm text-base-content/60">
            {/* <span className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              {views}
            </span> */}
            {/* <span className="flex items-center gap-1">
              <Heart className="w-4 h-4" />
              {likes}
            </span> */}
          </div>
          <Link to={`/product-details/${_id}`} className="btn rounded-full bg-linear-to-r from-pink-500 to-red-600 hover:from-red-600 hover:to-pink-500 text-white w-full btn-sm">See Details</Link>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
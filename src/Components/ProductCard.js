import React, { useState } from 'react';
import { formatDistanceToNow, parseISO } from 'date-fns';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { toast } from 'react-toastify';

const ProductCard = ({ product }) => {
  const [likedProducts, setLikedProducts] = useState([]);
  const endDate = parseISO(product.endDate);
  const daysLeft = Math.ceil((endDate - new Date()) / (1000 * 60 * 60 * 24));

  // Determine the auction tier
  let tier = "New";
  if (daysLeft <= 3) {
    tier = "Hot";
  } else if (daysLeft <= 7) {
    tier = "Ending Soon";
  }

  // Click handler for liking/unliking a product
  const clickHandler = () => {
    if (likedProducts.includes(product.id)) {
      // If the product is already liked, remove it from the liked list
      setLikedProducts((prev) => prev.filter((pid) => pid !== product.id));
      toast.warning("Liked Removed");
    } else {
      // If the product is not liked, add it to the liked list
      setLikedProducts((prev) => [...prev, product.id]);
      toast.success("Liked Successfully");
    }
  };

  return (
    <div className="border rounded-lg p-4 bg-white shadow-md relative">
      {/* Tier Badge */}
      <span
        className={`absolute top-2 right-2 text-xs font-semibold px-2 py-1 rounded ${
          tier === "Hot" ? "bg-red-500 text-white" :
          tier === "Ending Soon" ? "bg-yellow-500 text-white" : "bg-green-500 text-white"
        }`}
      >
        {tier}
      </span>

      {/* Product Information */}
      <h3 className="text-lg font-bold text-gray-800 mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-2">{product.description}</p>
      <p className="text-gray-700 font-semibold mb-2">Starting Bid: ${product.startingBid}</p>
      <p className="text-sm text-gray-500">
        Ends {formatDistanceToNow(endDate, { addSuffix: true })}
      </p>

      {/* Like Button */}
      <div className="absolute top-2 left-2">
        <button onClick={clickHandler}>
          {
            !likedProducts.includes(product.id) ? 
              <FcLikePlaceholder fontSize="1.75rem" /> : 
              <FcLike fontSize="1.75rem" />
          }
        </button>
      </div>

      {/* Heart Icon (Additional heart icon to show on the card) */}
      <div className="absolute top-2 right-8">
        <button onClick={clickHandler}>
          {
            !likedProducts.includes(product.id) ? 
              <FcLikePlaceholder fontSize="2rem" /> : 
              <FcLike fontSize="2rem" />
          }
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

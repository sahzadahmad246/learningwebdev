const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 flex flex-col justify-between hover:shadow-md transition">
      {/* Product Info */}
      <div>
        <h3 className="text-lg font-semibold mb-1">
          {product.name}
        </h3>
        <p className="text-gray-600 mb-4">
          ₹{product.price}
        </p>
      </div>

      {/* Action */}
      <button
        onClick={() => onAddToCart(product)}
        className="mt-auto bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;

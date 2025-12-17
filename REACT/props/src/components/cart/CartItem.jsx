const CartItem = ({ item, onRemoveFromCart, onQuantityUpdate }) => {
  return (
    <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg shadow-sm">
      {/* Product Info */}
      <div>
        <h3 className="font-medium">{item.name}</h3>
        <p className="text-sm text-gray-600">₹{item.price}</p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-3">
        <button
          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
          onClick={() =>
            onQuantityUpdate(item.id, Math.max(1, item.quantity - 1))
          }
        >
          -
        </button>

        <span className="w-6 text-center">{item.quantity}</span>

        <button
          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
          onClick={() =>
            onQuantityUpdate(item.id, item.quantity + 1)
          }
        >
          +
        </button>
      </div>

      {/* Remove */}
      <button
        className="text-red-500 text-sm hover:underline"
        onClick={() => onRemoveFromCart(item.id)}
      >
        remove
      </button>
    </div>
  );
};

export default CartItem;

import CartItem from "./CartItem";

const Cart = ({ cart, total, onRemoveFromCart, onQuantityUpdate }) => {
  if (cart.length === 0) {
    return (
      <div className="text-center text-gray-500 py-6">🛒 Cart is empty</div>
    );
  }

  return (
    <div className="space-y-4">
      {cart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onRemoveFromCart={onRemoveFromCart}
          onQuantityUpdate={onQuantityUpdate}
        />
      ))}

      <div className="border-t pt-4 text-right font-semibold">
        Total: ₹{total}
      </div>
    </div>
  );
};

export default Cart;

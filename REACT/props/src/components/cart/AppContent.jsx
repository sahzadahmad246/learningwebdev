import ProductCard from "./ProductCard";
import { products } from "./data/products";
import { useCart } from "./hooks/useCart";
import Cart from "./Cart";

const AppContent = () => {
  const { cart, addToCart, removeFromCart, updateQuantity, total } = useCart();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-semibold text-center mb-6">
        🛒 Shopping Cart
      </h1>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
          />
        ))}
      </div>

      {/* Cart */}
      <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md p-4">
        <Cart
          cart={cart}
          total={total}
          onRemoveFromCart={removeFromCart}
          onQuantityUpdate={updateQuantity}
        />
      </div>
    </div>
  );
};

export default AppContent;

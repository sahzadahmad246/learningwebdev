import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../../features/Cart/ProductSlice";
import { addToCart } from "../../features/Cart/CartSlice";

const Product = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const cartProducts = useSelector((state) => state.cart);
  
  // Fix: Per-product quantity state
  const [cartQuantities, setCartQuantities] = useState({});

  const handleProductSubmit = (productData) => {
    dispatch(
      createProduct({
        id: Date.now(),
        name: productData.name,
        price: productData.price,
        quantity: 1,
      })
    );
    reset();
  };

  // Fixed: Proper increment handler
  const handlerItemIncrement = (productId) => {
    setCartQuantities(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }));
    dispatch(
      addToCart({
        id: productId,
        name: products.find(p => p.id === productId)?.name,
        price: products.find(p => p.id === productId)?.price,
        quantity: (cartQuantities[productId] || 0) + 1,
      })
    );
  };

  const handlerItemDecrement = (productId) => {
    const newQty = (cartQuantities[productId] || 0) - 1;
    if (newQty > 0) {
      setCartQuantities(prev => ({
        ...prev,
        [productId]: newQty
      }));
    }
  };

  const handleAddItem = (product) => {
    const qty = cartQuantities[product.id] || 1;
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: qty,
      })
    );
    setCartQuantities(prev => ({
      ...prev,
      [product.id]: qty
    }));
  };

  // Calculate totals
  const cartTotal = cartProducts.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Add Product Form Card */}
        <div className="max-w-md mx-auto mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Add Product
            </h2>
            <form onSubmit={handleSubmit(handleProductSubmit)} className="space-y-4">
              {/* Product Name */}
              <div>
                <input
                  type="text"
                  placeholder="Product Name (4-10 chars)"
                  className={`
                    w-full px-4 py-3 border rounded-lg text-gray-700
                    focus:outline-none focus:ring-2 focus:ring-indigo-500
                    focus:border-transparent
                    ${errors.name ? "border-red-500" : "border-gray-300"}
                  `}
                  {...register("name", {
                    maxLength: { value: 10, message: "Not more than 10 characters" },
                    minLength: { value: 4, message: "Not less than 4 characters" },
                  })}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              {/* Product Price */}
              <div>
                <input
                  type="number"
                  placeholder="Price ($)"
                  className={`
                    w-full px-4 py-3 border rounded-lg text-gray-700
                    focus:outline-none focus:ring-2 focus:ring-indigo-500
                    focus:border-transparent
                    ${errors.price ? "border-red-500" : "border-gray-300"}
                  `}
                  {...register("price", {
                    maxLength: { value: 10, message: "Not more than 10 digits" },
                    min: { value: 0.01, message: "Price must be greater than 0" },
                  })}
                />
                {errors.price && (
                  <p className="mt-1 text-sm text-red-600">{errors.price.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  w-full py-3 px-4 bg-gradient-to-r from-indigo-500 to-indigo-600 
                  text-white font-medium rounded-lg shadow-md 
                  hover:from-indigo-600 hover:to-indigo-700 
                  focus:outline-none focus:ring-2 focus:ring-indigo-500 
                  focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed
                  transition-all duration-200
                "
              >
                {isSubmitting ? "Adding..." : "Add Product"}
              </button>
            </form>
          </div>
        </div>

        {/* Products Inventory */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Products Inventory ({products?.length || 0})
          </h2>
          {products && products.length > 0 ? (
            <div className="space-y-3">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-gray-50 rounded-lg border border-gray-200 p-4 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="text-indigo-600 font-medium">
                          ${product.price}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2M4 13h2m13-6a1 1 0 11-2 0 1 1 0 012 0" />
                          </svg>
                          Stock: {product.quantity}
                        </span>
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="ml-4 flex-shrink-0 flex items-center gap-2">
                      <button
                        onClick={() => handlerItemDecrement(product.id)}
                        className="
                          w-8 h-8 rounded-full bg-gray-200 text-gray-600 
                          hover:bg-gray-300 focus:outline-none focus:ring-2 
                          focus:ring-indigo-500 transition-all duration-200
                        "
                      >
                        -
                      </button>
                      <span className="w-8 text-center text-sm font-medium">
                        {cartQuantities[product.id] || 0}
                      </span>
                      <button
                        onClick={() => handlerItemIncrement(product.id)}
                        className="
                          w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 
                          hover:bg-indigo-200 focus:outline-none focus:ring-2 
                          focus:ring-indigo-500 transition-all duration-200
                        "
                      >
                        +
                      </button>
                      <button
                        onClick={() => handleAddItem(product)}
                        className="
                          ml-2 px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 
                          text-white text-sm font-medium rounded-lg shadow-md 
                          hover:from-green-600 hover:to-green-700 
                          focus:outline-none focus:ring-2 focus:ring-green-500
                          transition-all duration-200
                        "
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h18l-2 12H5L3 3zm0 0v0m0 0V9a1 1 0 011-1h14a1 1 0 011 1v3" />
              </svg>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No products yet</h3>
              <p className="text-gray-500">Add your first product above to get started!</p>
            </div>
          )}
        </div>

        {/* 🆕 CART SECTION */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <svg className="w-6 h-6 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 7.5M7 13l1.5 7.5M16 13l-1.5 7.5M16 13l4-8m-4 8h2m-4 0h2m-2 0h2m-2-4h2m-2 4h2" />
            </svg>
            Shopping Cart ({cartProducts?.length || 0})
          </h2>

          {cartProducts && cartProducts.length > 0 ? (
            <div className="space-y-4">
              {cartProducts.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-600">
                      ${item.price} × {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    <span className="text-sm font-medium text-indigo-600">
                      ${item.price}
                    </span>
                  </div>
                </div>
              ))}
              {/* Cart Total */}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Total:</span>
                  <span className="text-indigo-600">${cartTotal.toFixed(2)}</span>
                </div>
                <button className="
                  w-full mt-4 py-3 px-4 bg-gradient-to-r from-purple-500 to-purple-600 
                  text-white font-medium rounded-lg shadow-md 
                  hover:from-purple-600 hover:to-purple-700 
                  focus:outline-none focus:ring-2 focus:ring-purple-500
                  transition-all duration-200
                ">
                  Checkout (${cartTotal.toFixed(2)})
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 7.5M7 13l1.5 7.5M16 13l-1.5 7.5M16 13l4-8m-4 8h2m-4 0h2m-2 0h2m-2-4h2m-2 4h2" />
              </svg>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Your cart is empty</h3>
              <p className="text-gray-500">Add products above to start shopping!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
import React from "react";

const BookingSystem = ({ seats }) => {
  const categories = ["VIP", "Premium", "Regular", "Economy", "Budget"];
  return (
    <div className="bg-gray-900 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-white mb-6 text-center">
        Book Your Ticket
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {categories.map((category) => {
          const filteredCat = seats.filter(
            (seat) => seat.category === category
          );
          return (
            <div
              key={category}
              className="bg-gray-800 rounded-lg shadow-lg p-4 border border-gray-700"
            >
              <h2 className="text-xl font-semibold text-indigo-400 mb-5">
                {category}
              </h2>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {filteredCat.map((seat, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center group relative"
                  >
                    <span
                      className={`w-12 h-12 flex items-center justify-center rounded-md cursor-pointer text-white font-medium text-sm transition-colors duration-200 ${
                        seat.currentStatus === "booked"
                          ? "bg-gray-600"
                          : "bg-green-500"
                      } hover:bg-indigo-600`}
                    >
                      {seat.seatNumber}
                      <span className="absolute top-full mt-2 text-xs text-gray-300 bg-gray-900 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                        {seat.currentStatus}
                      </span>
                    </span>
                    <span className="mt-1 mb-3 text-xs text-gray-300">
                      ₹{seat.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BookingSystem;

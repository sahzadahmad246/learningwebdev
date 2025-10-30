import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
const BookingSystem = ({ seats }) => {
  const [selectedSeat, setSelectedSeat] = useState([]);
  const categories = ["VIP", "Premium", "Regular", "Economy", "Budget"];
  const [isOpen, setIsOpen] = useState(false);
  const handleSeatClick = (seat) => {
    if (seat.currentStatus !== "booked") {
      setSelectedSeat((prevSeat) => {
        const isAlreadySelected = prevSeat.some(
          (s) => s.seatNumber === seat.seatNumber
        );
        if (isAlreadySelected) {
          return prevSeat.filter((s) => {
            return s.seatNumber !== seat.seatNumber;
          });
        }
        return [...prevSeat, seat];
      });
    }
  };
  console.log(selectedSeat);
  return (
    <div className="bg-gray-900 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-white mb-6 text-center">
        Book Your Ticket
      </h1>
      <div className="flex flex-col lg:flex-row w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:basis-[65%] mx-auto">
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
                      onClick={() => handleSeatClick(seat)}
                    >
                      <span
                        className={`w-12 h-12 flex items-center justify-center rounded-md cursor-pointer text-white font-medium text-sm transition-colors duration-200 ${
                          selectedSeat.some(
                            (s) => s.seatNumber === seat.seatNumber
                          )
                            ? "bg-indigo-500"
                            : seat.currentStatus === "booked"
                            ? "bg-gray-600"
                            : "bg-green-500"
                        }`}
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

        <div className="bg-[#1E2939] w-full lg:basis-[30%] rounded-lg border border-gray-700 p-4 min-h-110 flex flex-col">
          {selectedSeat.length > 0 ? (
            <div>
              <h2 className="text-xl font-semibold text-indigo-400 mb-5">
                Selected Seats
              </h2>

              {/* Accordion Header */}
              <div
                className="border border-gray-700 bg-[#101828] rounded-lg p-4 mb-4 cursor-pointer hover:bg-[#1a2332] transition-colors"
                onClick={() => setIsOpen(!isOpen)}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-white font-medium">
                      {selectedSeat.length}{" "}
                      {selectedSeat.length === 1 ? "Seat" : "Seats"} Selected
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-white font-semibold">
                      ₹{" "}
                      {selectedSeat.reduce((acc, seat) => acc + seat.price, 0)}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </div>
              </div>

              {/* Accordion Content - Seat List */}
              {isOpen && (
                <ul className="space-y-2 mb-4 max-h-80 overflow-y-auto text-sm">
                  {selectedSeat.map((seat, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center px-3 py-2 bg-[#0f172a] rounded border border-gray-700"
                    >
                      <span className="text-gray-300">{seat.seatNumber}</span>
                      <span className="text-white font-medium">
                        ₹ {seat.price}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Total & Checkout */}
              <div className="mt-auto border-t border-gray-700 pt-4">
                <div className="flex justify-between items-center mb-4 px-1">
                  <p className="text-white font-semibold">Total:</p>
                  <p className="text-xl text-white font-bold">
                    ₹ {selectedSeat.reduce((acc, seat) => acc + seat.price, 0)}
                  </p>
                </div>

                <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition-colors">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          ) : (
            <div className="flex justify-center items-center text-white text-xl font-semibold">
              Select you seat to continue
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingSystem;

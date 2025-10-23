import "./App.css";
import BookingSysytem from "./components/bookmyshow/bookingSysytem";
import Cart from "./components/Cart/Cart";
import Counter from "./components/Counter";
import NameList from "./components/useMemo/NameList ";
import NumberList from "./components/useMemo/NumberList";

import ClickGame from "./components/useRef/ClickGame";
import { Focus } from "./components/useRef/Focus";
import Stopwatch from "./components/useRef/Stopwatch";
// import TodoApp from ".mcomponents/TodoApp";

function App() {
  const seats = [
    // Category A - VIP
    {
      seatNumber: "A1",
      category: "VIP",
      price: 300,
      currentStatus: "available",
    },
    { seatNumber: "A2", category: "VIP", price: 300, currentStatus: "booked" },
    {
      seatNumber: "A3",
      category: "VIP",
      price: 300,
      currentStatus: "available",
    },
    { seatNumber: "A4", category: "VIP", price: 300, currentStatus: "booked" },
    {
      seatNumber: "A5",
      category: "VIP",
      price: 300,
      currentStatus: "available",
    },

    // Category B - Premium
    {
      seatNumber: "B1",
      category: "Premium",
      price: 250,
      currentStatus: "available",
    },
    {
      seatNumber: "B2",
      category: "Premium",
      price: 250,
      currentStatus: "booked",
    },
    {
      seatNumber: "B3",
      category: "Premium",
      price: 250,
      currentStatus: "available",
    },
    {
      seatNumber: "B4",
      category: "Premium",
      price: 250,
      currentStatus: "available",
    },
    {
      seatNumber: "B5",
      category: "Premium",
      price: 250,
      currentStatus: "booked",
    },

    // Category C - Regular
    {
      seatNumber: "C1",
      category: "Regular",
      price: 200,
      currentStatus: "available",
    },
    {
      seatNumber: "C2",
      category: "Regular",
      price: 200,
      currentStatus: "available",
    },
    {
      seatNumber: "C3",
      category: "Regular",
      price: 200,
      currentStatus: "booked",
    },
    {
      seatNumber: "C4",
      category: "Regular",
      price: 200,
      currentStatus: "available",
    },
    {
      seatNumber: "C5",
      category: "Regular",
      price: 200,
      currentStatus: "booked",
    },

    // Category D - Economy
    {
      seatNumber: "D1",
      category: "Economy",
      price: 150,
      currentStatus: "available",
    },
    {
      seatNumber: "D2",
      category: "Economy",
      price: 150,
      currentStatus: "booked",
    },
    {
      seatNumber: "D3",
      category: "Economy",
      price: 150,
      currentStatus: "available",
    },
    {
      seatNumber: "D4",
      category: "Economy",
      price: 150,
      currentStatus: "available",
    },
    {
      seatNumber: "D5",
      category: "Economy",
      price: 150,
      currentStatus: "booked",
    },

    // Category E - Budget
    {
      seatNumber: "E1",
      category: "Budget",
      price: 100,
      currentStatus: "available",
    },
    {
      seatNumber: "E2",
      category: "Budget",
      price: 100,
      currentStatus: "booked",
    },
    {
      seatNumber: "E3",
      category: "Budget",
      price: 100,
      currentStatus: "available",
    },
    {
      seatNumber: "E4",
      category: "Budget",
      price: 100,
      currentStatus: "available",
    },
    {
      seatNumber: "E5",
      category: "Budget",
      price: 100,
      currentStatus: "booked",
    },
  ];

  return <BookingSysytem seats={seats} />;
}

export default App;

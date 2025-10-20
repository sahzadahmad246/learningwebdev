import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreament,
  increament,
  increamentByAmount,
  resetValue,
} from "../features/counter/counterSlice";
import { useForm } from "react-hook-form";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const dispatch = useDispatch();
  const handleIncreament = () => {
    dispatch(increament());
  };
  const handleDecreament = () => {
    dispatch(decreament());
  };
  const handleReset = () => {
    dispatch(resetValue());
  };
  const handleIncreamentByAmount = (data) => {
    const amount = Number(data.amount);
    dispatch(increamentByAmount(amount));
    reset();
  };
  return (
    <>
      <div className="flex justify-center items-center  h-screen bg-[#090b17] text-white">
        <div className="w-3/10 bg-[#0d1439] rounded-lg flex items-center  flex-col p-4">
          <div className=" flex items-center justify-between  w-full ">
            <button
              onClick={handleIncreament}
              className="bg-white px-3 py-1 text-black rounded-xl text-center"
            >
              +
            </button>
            <p>Count: {count}</p>
            <button
              onClick={handleDecreament}
              className="bg-white px-3 py-1 text-black rounded-xl text-center"
            >
              -
            </button>
          </div>
          <div className="flex items-center mt-4  w-full justify-center flex-col">
            <button
              onClick={handleReset}
              className="bg-white px-3 py-1 text-black rounded-xl text-center"
            >
              Reset
            </button>
            <form onSubmit={handleSubmit(handleIncreamentByAmount)}>
              <input
                type="number"
                className="border border-gray-500 p-1 m-2 rounded-lg outline-0"
                {...register("amount")}
              />
              {errors.amount && <p>{errors.amount.message}</p>}
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-white px-3 py-1 text-black rounded-xl text-center"
              >
                Increament
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;

import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createSlot } from "../redux/slotSlice";

export const AddSlot = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(createSlot(data));
    reset()
  };

  return (
    <div className="min-h-screen bg-theme flex items-center justify-center p-4 transition-colors duration-300">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-surface w-full max-w-md rounded-2xl shadow-xl p-8 space-y-6 transform transition-all hover:shadow-2xl"
      >
        {/* Title */}
        <h2 className="text-2xl text-heading text-center">Add Parking Slot</h2>

        {/* Input Group */}
        <div className="space-y-2">
          <label
            htmlFor="slotNo"
            className="block text-sm font-medium text-theme"
          >
            Slot Number
          </label>

          <input
            id="slotNo"
            type="text"
            placeholder="e.g., A101"
            className={`
              w-full px-4 py-3 rounded-lg border text-theme
              focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-primary))] focus:border-transparent
              transition-all duration-200
              ${
                errors.slotNo
                  ? "border-[rgb(var(--color-error))]"
                  : "border-theme"
              }
            `}
            {...register("slotNo", {
              required: "Slot number is required",
              maxLength: { value: 5, message: "Max 5 characters" },
              pattern: {
                value: /^[A-Za-z0-9]+$/,
                message: "Only letters & numbers",
              },
            })}
          />

          {/* Error */}
          {errors.slotNo && (
            <p className="mt-1 text-sm text-[rgb(var(--color-error))] animate-fade-in">
              {errors.slotNo.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-primary hover:bg-[rgb(var(--color-primary)/0.9)]
                     font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5
                     transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-primary)/0.5)] focus:ring-offset-2 focus:ring-offset-surface"
        >
          Create Slot
        </button>
      </form>
    </div>
  );
};

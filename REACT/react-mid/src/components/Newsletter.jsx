import React from "react";
import { useForm } from "react-hook-form";
const Newsletter = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm();

  const handleDataSubmit = async (data) => {
    console.log("form data before submitted", data);
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 5000);
    });
    console.log("form data after submitted", data);
    reset();
  };
  const formValue = watch();
  //   console.log(formValue.checkbox);
  return (
    <div className="flex justify-center items-center flex-col h-screen bg-[#090b17] text-white">
      <div className=" bg-[#171f47] p-3 rounded-xl">
        <h2 className="text-center pb-2">Subscribe to our newletter</h2>
        {isSubmitSuccessful ? (
          <p>You have subscribe to our news letter thank you </p>
        ) : (
          <form onSubmit={handleSubmit(handleDataSubmit)}>
            <div className=" p-2 flex flex-col">
              <label
                className={`text-gray-300 pb-2 ${
                  errors.name ? "text-red-500" : ""
                }`}
              >
                Name
              </label>
              <input
                {...register("name", {
                  minLength: {
                    value: 3,
                    message: "oye hero! name should be atleast 3 ",
                  },
                  maxLength: {
                    value: 10,
                    message: "name is too long, warp it under 10",
                  },
                  required: "Name can't be blank",
                })}
                className={`border p-2 rounded-lg outline-0 ${
                  errors.name ? "border-red-500" : "border-gray-500 "
                }`}
              />
              {errors.name && (
                <p className="text-red-500 pt-1 text-xs">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div className=" p-2 flex flex-col">
              <label
                className={`text-gray-300 pb-2 ${
                  errors.email ? "text-red-500" : ""
                }`}
              >
                Email
              </label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
                className={`border p-2 rounded-lg outline-0 ${
                  errors.email ? "border-red-500" : "border-gray-500 "
                }`}
              />
              {errors.email && (
                <p className="text-red-500 pt-1 text-xs">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <input type="checkbox" {...register("checkbox")} />
              {formValue.checkbox && (
                <p>Thank you for subscribing to out news letter</p>
              )}
            </div>
            <div>
              <button
                type="submit "
                disabled={isSubmitting}
                className={`p-2 text-black w-full rounded-xl mt-2 ${
                  isSubmitting ? "bg-gray-500" : "bg-white"
                }`}
              >
                Subscribe
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Newsletter;

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const [searchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (pasteId) {
      setIsEditing(true);
    }
  }, [pasteId]);
  const handleCreatePaste = (data) => {
    console.log(data);
  };
  return (
    <div className="w-5/10 my-5 rounded-xl p-3">
      <form
        onSubmit={handleSubmit(handleCreatePaste)}
        className="flex flex-col w-full"
      >
        <div className=" flex flex-col items-start w-full">
          <label className={`${errors.title ? "text-red-500" : "text-white"}`}>
            Title
          </label>
          <input
            className={`w-full p-3 my-3 border  outline-0 rounded-lg ${
              errors.title ? "border-red-500" : "border-[#ffff]"
            }`}
            type="text"
            placeholder="Enter title"
            {...register("title", {
              required: { value: true, message: "Title cant be blank" },
              maxLength: { value: 20, message: "not more than 20" },
            })}
          />
          {errors.title && (
            <p className="text-red-500">{errors.title.message}</p>
          )}
        </div>
        <div className=" flex flex-col items-start w-full">
          <label
            className={`${errors.content ? "text-red-500" : "text-white"}`}
          >
            Content
          </label>
          <textarea
            rows={8}
            className={`w-full p-3 my-3 border  outline-0 rounded-lg ${
              errors.content ? "border-red-500" : "border-[#ffff]"
            }`}
            placeholder="Enter title"
            {...register("content", {
              required: { value: true, message: "content cant be blank" },
              maxLength: { value: 20, message: "not more than 20" },
            })}
          />
          {errors.content && (
            <p className="text-red-500">{errors.content.message}</p>
          )}
        </div>
        <button
          type="submit"
          className={`w-full p-3 mt-3  text-black rounded-xl ${
            isSubmitting ? "bg-[#9f9f9f]" : "bg-[#ffff]"
          }  `}
          disabled={isSubmitting}
        >
          {isEditing ? "Update Paste" : "Create Paste"}
        </button>
      </form>
    </div>
  );
};

export default Home;

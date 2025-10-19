import "./App.css";
// import { useForm } from "react-hook-form";
import Newsletter from "./components/Newsletter";
function App() {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors, isSubmitting },
  //   reset,
  // } = useForm();

  // const handlingData = async (data) => {
  //   await new Promise((resolve) => {
  //     setTimeout(() => {
  //       console.log("formdata", data);
  //       resolve();
  //     }, 5000);
  //   });
  //   reset();
  // };

  return (
    // <div className="flex justify-center items-center h-screen bg-[#090b17] text-white">
    //   <div className="border border-white p-3 rounded-lg">
    //     <h1 className="text-center pb-2">Contact Form</h1>
    //     <form onSubmit={handleSubmit(handlingData)}>
    //       <div className=" p-2 flex flex-col">
    //         <label className={`${errors.firstName ? "text-red-500" : ""}`}>
    //           First Name
    //         </label>
    //         <input
    //           {...register("firstName", {
    //             minLength: { value: 3, message: "enter at least 3 character" },
    //             maxLength: {
    //               value: 6,
    //               message: "do not enter more than 6 character",
    //             },
    //             required: "This field is required",
    //           })}
    //           className={`border  p-2 rounded-lg outline-0 ${
    //             errors.firstName ? "border-red-500" : "border-gray-300"
    //           }`}
    //         />
    //         {errors.firstName && (
    //           <p className="pt-2 text-red-500">{errors.firstName.message}</p>
    //         )}
    //       </div>

    //       <div className=" p-2 flex flex-col">
    //         <label className={`${errors.middleName ? "text-red-500" : ""}`}>
    //           Middle Name
    //         </label>
    //         <input
    //           {...register("middleName", {
    //             minLength: { value: 3, message: "enter at least 3 character" },
    //             maxLength: {
    //               value: 6,
    //               message: "do not enter more than 6 character",
    //             },
    //             required: "This field is required",
    //           })}
    //           className={`border  p-2 rounded-lg outline-0 ${
    //             errors.middleName ? "border-red-500" : "border-gray-300"
    //           }`}
    //         />
    //         {errors.middleName && (
    //           <p className="pt-2 text-red-500">{errors.middleName.message}</p>
    //         )}
    //       </div>

    //       <div className=" p-2 flex flex-col">
    //         <label className={`${errors.lastName ? "text-red-500" : ""}`}>
    //           Last Name
    //         </label>
    //         <input
    //           {...register("lastName", {
    //             minLength: { value: 3, message: "enter at least 3 character" },
    //             maxLength: {
    //               value: 6,
    //               message: "do not enter more than 6 character",
    //             },
    //             required: "This field is required",
    //           })}
    //           className={`border p-2 rounded-lg outline-0 ${
    //             errors.lastName ? "border-red-500" : "border-gray-300"
    //           }`}
    //         />
    //         {errors.lastName && (
    //           <p className="pt-2 text-red-500">{errors.lastName.message}</p>
    //         )}
    //       </div>

    //       <button
    //         className={` p-2 text-black w-full mt-3 ${
    //           isSubmitting ? "bg-gray-500" : "bg-white"
    //         }`}
    //         type="submit"
    //         disabled={isSubmitting}
    //       >
    //         {isSubmitting ? "Submitting" : " Submit"}
    //       </button>
    //     </form>
    //   </div>
    // </div>
    <Newsletter/>
  );
}

export default App;

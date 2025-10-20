import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask, markCompleted } from "../features/Todo/Todo";

const TodoApp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.toDo);
  console.log("tasks: ", tasks);
  const handleTask = (data) => {
    dispatch(
      addTask({
        id: Date.now(),
        title: data.task,
        priority: data.priority,
      })
    );
    reset();
  };

  const handleTaskToggle = (id) => {
    dispatch(markCompleted(id));
  };
  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };
  return (
    <>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <form onSubmit={handleSubmit(handleTask)} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Enter your task (10-50 characters)"
                  className={`
                    w-full px-4 py-3 border rounded-lg text-gray-700
                    focus:outline-none focus:ring-2 focus:ring-blue-500
                    focus:border-transparent
                    ${errors.task ? "border-red-500" : "border-gray-300"}
                  `}
                  {...register("task", {
                    minLength: {
                      value: 10,
                      message: "Enter at least 10 characters",
                    },
                    maxLength: {
                      value: 50,
                      message: "Not more than 200 characters",
                    },
                  })}
                />
                {errors.task && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.task.message}
                  </p>
                )}
              </div>

              <select
                {...register("priority")}
                className="
                  w-full px-4 py-3 border border-gray-300 rounded-lg 
                  text-gray-700 focus:outline-none focus:ring-2 
                  focus:ring-blue-500 focus:border-transparent
                "
              >
                <option value="">Select priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>

              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-blue-600 
                  text-white font-medium rounded-lg shadow-md 
                  hover:from-blue-600 hover:to-blue-700 
                  focus:outline-none focus:ring-2 focus:ring-blue-500 
                  focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed
                  transition-all duration-200
                "
              >
                {isSubmitting ? "Adding..." : "Add Task"}
              </button>
            </form>
          </div>
        </div>
        {tasks &&
          tasks.map((task, index) => {
            return (
              <div
                key={index}
                className="
          bg-white rounded-lg shadow-sm border border-gray-200 
          p-4 mb-3 hover:shadow-md transition-all duration-200
        "
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    {/* Task Title */}
                    <p
                      className={`
              text-lg font-medium text-gray-900 mb-1
              ${task.completed ? "line-through text-gray-500" : ""}
            `}
                    >
                      {task.title}
                    </p>

                    {/* Priority Badge */}
                    <span
                      className={`
              inline-block px-2 py-1 rounded-full text-xs font-semibold mb-2
              ${
                task.priority === "Low"
                  ? "bg-green-100 text-green-800"
                  : task.priority === "Medium"
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-red-100 text-red-800"
              }
            `}
                    >
                      {task.priority}
                    </span>

                    {/* Status */}
                    <p
                      className={`
              text-sm
              ${task.completed ? "text-green-600 font-medium" : "text-gray-600"}
            `}
                    >
                      {task.completed ? "Completed" : "Pending"}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 ml-4 flex-shrink-0">
                    <button
                      onClick={() => handleTaskToggle(task.id)}
                      className={`
                px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200
                ${
                  task.completed
                    ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    : "bg-green-100 text-green-700 hover:bg-green-200"
                }
                focus:outline-none focus:ring-2 focus:ring-green-500
              `}
                    >
                      {task.completed ? "Undo" : "Complete"}
                    </button>

                    <button
                      onClick={() => handleDelete(task.id)}
                      className="
                px-3 py-1.5 bg-red-100 text-red-700 rounded-lg text-sm 
                font-medium hover:bg-red-200 focus:outline-none 
                focus:ring-2 focus:ring-red-500 transition-all duration-200
              "
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default TodoApp;

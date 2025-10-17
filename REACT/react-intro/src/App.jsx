import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Dashboard from "./components/pages/Dashboard";
import Navbar from "./components/pages/Navbar";
import Params from "./components/pages/Params";
import Courses from "./components/pages/Courses";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        {
          path: "/dashboard",
          element: <Dashboard />,
          children: [
            { path: "courses", element: <Courses /> },
            { path: "reports", element: <div>this is reports page</div> },
          ],
        },
        { path: "/params/:id", element: <Params /> },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

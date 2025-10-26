import { store } from "./Store";
import { Provider } from "react-redux";
import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Paste from "./components/Paste";
import ViewPaste from "./components/ViewPaste";
import Home from "./components/Home";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/pastes",
          element: <Paste />,
        },
        {
          path: "/paste/:id",
          element: <ViewPaste />,
        },
      ],
    },
  ]);
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router}>
          <h1 className="text-3xl font-bold underline">Hello world!</h1>
        </RouterProvider>
      </Provider>
    </>
  );
}

export default App;

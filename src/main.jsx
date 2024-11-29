import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCoffee from "./components/AddCoffee.jsx";
import UpdateCoffee from "./components/UpdateCoffee.jsx";
import Home from "./components/Home.jsx";
import CoffeeDetails from "./components/CoffeeDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://coffee-server-gghx.onrender.com"),
      },
      {
        path: "/coffeeDetails/:id",
        element: <CoffeeDetails />,
        loader: ({ params }) =>
          fetch(
            `https://coffee-server-gghx.onrender.com/coffeeDetails/${params.id}`
          ),
      },
      {
        path: "/addCoffee",
        element: <AddCoffee />,
      },
      {
        path: "/coffeeUpdate/:id",
        element: <UpdateCoffee />,
        loader: ({ params }) =>
          fetch(
            `https://coffee-server-gghx.onrender.com/coffeeDetails/${params.id}`
          ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

// https://heartfelt-hotteok-b0dd51.netlify.app
// https://coffee-server-gghx.onrender.com
// https://coffee-server-gghx.onrender.com/coffeeDetails/1

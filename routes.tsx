import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Dashboard from "./Dashboard";
import Products from "./Products";
import Stock from "./Stock";
import Login from "./Login";
import Signup from "./Signup";
import ProtectedRoute from "./ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      {
        path: "/products",
        element: (
          <ProtectedRoute>
            <Products />
          </ProtectedRoute>
        ),
      },
      {
        path: "/stock",
        element: (
          <ProtectedRoute>
            <Stock />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

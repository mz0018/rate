import { StrictMode, lazy } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";

const Admin = lazy(() => import("./components/Admin.jsx"));

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/admin", element: <Admin /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

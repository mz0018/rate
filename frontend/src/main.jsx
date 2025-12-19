import { StrictMode, lazy } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

const Admin = lazy(() => import("./forms/Admin.jsx"));
const AdminDashboard = lazy(() => import("./components/AdminComponents/AdminDashboard.jsx"));

const QueueingSection = lazy(() => import("./sections/AdminSection/QueueingSection.jsx"));
const AnalyticsSection = lazy(() => import("./sections/AdminSection/AnalyticsSection.jsx"));
const FeedBackSection = lazy(() => import("./sections/AdminSection/FeedbackSection.jsx"));

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/admin", element: <Admin /> },
  { 
    path: "/admindashboard", 
    element: <AdminDashboard />,
    children: [
      { path: "feedback", element: <FeedBackSection /> },
      { path: "queueing", element: <QueueingSection /> },
      { path: "analytics", element: <AnalyticsSection /> },
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </AuthProvider>
);

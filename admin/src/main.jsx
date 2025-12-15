import { StrictMode, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './contexts/AuthContext.jsx'

const SuperAdminDashboard = lazy(() =>
  import('./components/SuperAdminDashBoard.jsx')
)

const router = createBrowserRouter(
  [
    { path: "/", element: <App /> },
    { path: "/superadmin", element: <SuperAdminDashboard /> },
  ],
  {
    basename: "/auth",
  }
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
)


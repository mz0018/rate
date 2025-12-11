import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './contexts/AuthContext.jsx'

const SuperAdminDashboard = lazy(() => import('./components/SuperAdminDashBoard.jsx'));

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/superadmin", element: <SuperAdminDashboard /> }
])

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </AuthProvider>,
)

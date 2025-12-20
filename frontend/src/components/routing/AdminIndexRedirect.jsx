import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const AdminIndexRedirect = () => {
  const { user } = useAuth();

  if (!user) return null;

  switch (user.role) {
    case "hr-admin":
      return <Navigate to="feedback" replace />;

    case "office-admin":
      return <Navigate to="queueing" replace />;

    default:
      return <Navigate to="settings" replace />;
  }
};

export default AdminIndexRedirect;
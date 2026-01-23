import { useAuth } from "../context/AuthContext";
import { logoutUser } from "../services/authService";

export default function Dashboard() {
  const { user, setUser } = useAuth();

  const handleLogout = async () => {
    await logoutUser();
    setUser(null);
  };

  return (
    <>
      <h1>Welcome, {user.name}</h1>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}

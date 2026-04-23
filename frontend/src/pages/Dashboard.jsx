import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { logoutUser } from "../services/authService";
import { getMyEvents } from "../services/eventService";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const { user, setUser } = useAuth();
  const [events, setEvents] = useState([]);
  const [error, setError] = useState("");

  const handleLogout = async () => {
    try {
      await logoutUser();
      setUser(null);
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await getMyEvents();
        setEvents(res.data);
      } catch (err) {
        setError("Failed to load events");
      }
    };

    fetchEvents();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome, {user?.name}</h1>

      <button onClick={handleLogout}>Logout</button>

      <hr />

      <h2>Your Events</h2>

      <Link to="/create-event">
        <button>Create New Event</button>
      </Link>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {events.length === 0 ? (
        <p>No events created yet.</p>
      ) : (
        <ul>
          {events.map((event) => (
            <li key={event._id}>
              <strong>{event.title}</strong> <br />
              {new Date(event.date).toDateString()} <br />
              {event.isPrivate ? "Private" : "Public"}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
import { useState } from "react";
import { createEvent } from "../services/eventService";
import { useNavigate } from "react-router-dom";

export default function CreateEvent() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [isPrivate, setIsPrivate] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await createEvent({
        title,
        description,
        date,
        isPrivate,
      });

      alert("Event created!");
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to create event");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Event</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <input
        type="text"
        placeholder="Event Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />

      <label>
        <input
          type="checkbox"
          checked={isPrivate}
          onChange={(e) => setIsPrivate(e.target.checked)}
        />
        Private Event
      </label>

      <button type="submit">Create Event</button>
    </form>
  );
}
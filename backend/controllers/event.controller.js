import Event from "../models/Event.js";

/**
 * @route   POST /api/events
 * @access  Private
 */
export const createEvent = async (req, res) => {
  try {
    const { title, description, date, isPrivate } = req.body;

    if (!title || !date) {
      return res.status(400).json({ message: "Title and date are required" });
    }

    const event = await Event.create({
      title,
      description,
      date,
      isPrivate,
      host: req.user.id,
    });

    res.status(201).json({
      message: "Event created successfully",
      event,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * @route   GET /api/events/my
 * @access  Private
 */
export const getMyEvents = async (req, res) => {
  try {
    const events = await Event.find({ host: req.user.id }).sort({ createdAt: -1 });

    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
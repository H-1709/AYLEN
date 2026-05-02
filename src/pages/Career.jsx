import { useState } from "react";
import { sendCareerForm } from "../lib/emailService";
import "./career.css";

export default function Career() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await sendCareerForm(form);
      setStatus("Application Sent Successfully! 🎉");
      setForm({
        name: "",
        email: "",
        phone: "",
        position: "",
        message: "",
      });
    } catch (error) {
      setStatus("Failed to send. Please try again.");
    }
  }

  return (
    <div className="career-page">
      <h1 className="career-title">Join Our Team</h1>
      <p className="career-subtitle">
        Build your career with LENTRIX and be a part of transforming healthcare.
      </p>

      <form className="career-form" onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Your Full Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          name="phone"
          type="text"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
        />

        <select name="position" value={form.position} onChange={handleChange} required>
          <option value="">Select Position</option>
          <option value="Medical Representative">Medical Representative</option>
          <option value="Marketing Associate">Marketing Associate</option>
          <option value="Distribution Manager">Distribution Manager</option>
          <option value="Office Executive">Office Executive</option>
        </select>

        <textarea
          name="message"
          placeholder="Tell us about yourself..."
          rows="4"
          value={form.message}
          onChange={handleChange}
        ></textarea>

        <button className="career-btn" type="submit">Submit Application</button>
      </form>

      {status && <p className="career-status">{status}</p>}
    </div>
  );
}

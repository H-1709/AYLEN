import { useState } from "react";
import "./Distributors.css";
import { distributors } from "../data/distributors";
import { FaUser, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaSearch } from "react-icons/fa";

export default function Distributors() {
  const [search, setSearch] = useState("");
  const [filterCity, setFilterCity] = useState("All");

  // Get all unique cities for dropdown
  const cities = ["All", ...new Set(distributors.map(d => d.city))];

  // Filter logic
  const filtered = distributors.filter(d => {
    const matchesSearch =
      d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.city.toLowerCase().includes(search.toLowerCase()) ||
      d.phone.includes(search);

    const matchesCity = filterCity === "All" || d.city === filterCity;

    return matchesSearch && matchesCity;
  });

  return (
    <div className="dist-page">

      <h1 className="dist-title">Distribution Network</h1>

      {/* Search + Filter Section */}
      <div className="dist-controls">
        <div className="dist-search">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search distributor, city, or phone..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        <select
          className="city-filter"
          value={filterCity}
          onChange={e => setFilterCity(e.target.value)}
        >
          {cities.map((c, i) => (
            <option key={i} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {/* Distributor Grid */}
      <div className="dist-grid">
        {filtered.map((d, i) => (
          <div key={i} className="dist-card">
            <div className="dist-icon"><FaUser /></div>

            <h3 className="dist-city">
              <FaMapMarkerAlt className="marker" /> {d.city}
            </h3>

            <p className="dist-name">{d.name}</p>

            <a href={`tel:${d.phone.replace(/\s+/g, "")}`} className="dist-phone">
              <FaPhoneAlt /> {d.phone}
            </a>

            <a href={`mailto:${d.email}`} className="dist-email">
              <FaEnvelope /> {d.email}
            </a>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="dist-no-results">No distributors found.</p>
      )}
    </div>
  );
}

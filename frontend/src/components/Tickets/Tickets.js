import React, { useState } from 'react';
import './Tickets.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Ticket() {
  const [startDate, setStartDate] = useState(new Date());
  const [toPlace, setToPlace] = useState('');
  const [fromPlace, setFromPlace] = useState('');

  const places = [
    { value: 'delhi', label: 'Delhi' },
    { value: 'mumbai', label: 'Mumbai' },
    { value: 'bangalore', label: 'Bangalore' },
    { value: 'hyderabad', label: 'Hyderabad' },
    { value: 'chennai', label: 'Chennai' },
    { value: 'trichy', label: 'Trichy' },
  ];

  return (
    <div className="home-container">
      <div className="home-form-container">
        <h1 className="home-heading">Book Ticket</h1>
        <div className="home-form-row">
          <div className="home-form-field">
            <label className="home-form-label">To:</label>
            <select
              className="home-form-select"
              value={toPlace}
              onChange={(e) => setToPlace(e.target.value)}
            >
              <option value="" hidden>
                Select a place
              </option>
              {places.map((place) => (
                <option key={place.value} value={place.value}>
                  {place.label}
                </option>
              ))}
            </select>
          </div>
          <div className="home-form-field">
            <label className="home-form-label">From:</label>
            <select
              className="home-form-select"
              value={fromPlace}
              onChange={(e) => setFromPlace(e.target.value)}
            >
              <option value="" hidden>
                Select a place
              </option>
              {places.map((place) => (
                <option key={place.value} value={place.value}>
                  {place.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="home-form-field">
          <label className="home-form-label">Travel Date:</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="home-form-datepicker"
          />
        </div>

        <div className="home-form-field">
          <Link to="/Availability">
            <button className="home-form-search-button">Search</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Ticket;

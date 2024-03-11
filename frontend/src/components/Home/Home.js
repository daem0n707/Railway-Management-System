import React from 'react';
import './Home.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link } from 'react-router-dom';

function Home() {
  const [startDate, setStartDate] = React.useState(new Date());
  const [toPlace, setToPlace] = React.useState('');
  const [fromPlace, setFromPlace] = React.useState('');

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
        <h1 className="home-heading">Book Ticket</h1><br></br>
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
        <div className="home-form-field">
          <label className="home-form-label">Travel Date:</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="home-form-datepicker"
          />
        </div>
        <div className="home-form-field">
          <label className="home-form-label">Class:</label>
          <select className="home-form-select">
            <option value="general">General</option>
            <option value="sleeper">Sleeper</option>
            <option value="first_class">First Class</option>
            <option value="second_class">Second Class</option>
            <option value="1ac">1st AC</option>
            <option value="2ac">2nd AC</option>
            <option value="private">Private</option>
          </select>
        </div>
        <center>
        <div className="home-form-field home-form-checkbox-container">
          <label className="home-form-checkbox-label">
            <input type="checkbox" className="home-form-checkbox" />
            Round Trip
          </label> 
          <label className="home-form-checkbox-label">
            <input type="checkbox" className="home-form-checkbox" />
            One Way
          </label>
          <label className="home-form-checkbox-label">
            <input type="checkbox" className="home-form-checkbox" />
            Multi-City
          </label>
          <label className="home-form-checkbox-label">
            <input type="checkbox" className="home-form-checkbox" />
            Direct Train
          </label>
        </div>
        </center> <br></br>
        <div className="home-form-field">
        <button className="home-form-search-button">Search</button>
        </div>
      </div>
    </div>
  );
}

export default Home;






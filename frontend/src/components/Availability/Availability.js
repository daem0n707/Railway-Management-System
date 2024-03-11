import React, { useEffect, useState } from 'react';
import backgroundGif from './giphy.gif';
import './Availability.css'

function Availability() {
  const handleBook = (curr_station, destination, date) => {
    fetch('http://localhost:3001/book-ticket', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ curr_station, destination, date }) 
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to book ticket');
        }
        console.log('Ticket booked successfully');
        alert('Ticket has been booked successfully!')
    })
    .catch(error => {
        console.error('Error booking ticket:', error.message);
    });
};
  

  const [trains, setTrains] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/trains')
      .then(response => response.json())
      .then(data => {
        setTrains(data);
      })
      .catch(error => {
        console.error('Error fetching trains:', error.message);
      });
  }, []);

  return (
    <div className="availability-container" style={{ backgroundImage: `url(${backgroundGif})` }}>
      <h1 className="availability-heading text-white">AVAILABLE TRAINS</h1>
      <div className="d-flex justify-content-start">
        <div className="availability-list row">
          {trains.map((train, index) => (
            <div key={train.train_id} className="col-md-4 mb-4">
              <div className={`card bg-light card-gradient-${(index % 3) + 1}`}>
                <div className="card-body">
                  <h5 className="card-title">Train ID: {train.train_id}</h5>
                  <p className="card-text">Capacity: {train.capacity}</p>
                  <p className="card-text">Date: {train.date}</p>
                  <p className="card-text">Current Station: {train.curr_station}</p>
                  <p className="card-text">Destination: {train.destination}</p>
                  <button className="btn btn-primary" onClick={() => handleBook(train.curr_station, train.destination, train.date)}>Book</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Availability;

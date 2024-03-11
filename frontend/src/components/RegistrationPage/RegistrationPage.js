import React, { useState } from 'react';
import './RegistrationPage.css';

function RegistrationPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [gender, setGender] = useState('');  
  const [aadharNumber, setAadharNumber] = useState('');
  const [confirmation, setConfirmation] = useState(false);

  const handleRegister = () => {
    const userData = {
      username,
      email,
      password,
      phoneNumber,
      age,
      city,
      gender,
      aadharNumber
    };

    fetch('http://localhost:3001/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to register user');
      }
      console.log('User registered successfully');
      alert('User registered successfully!')
      window.location.href = '/login'
    })
  };

  return (
    <div className="registration-container">
      <div className="registration-form-container">
        <h2 className="registration-heading">REGISTER</h2><br />
        <div className="registration-form-field">
          <form>
            {/* Username */}
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            /><br />
            
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            /><br />

            {/* Password */}
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            /><br />

            {/* Confirm Password */}
            <label>Confirm Password:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            /><br />

            {/* Phone Number */}
            <label>Phone Number:</label>
            <input
              type="tel"
              pattern="[0-9]{10}"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            /><br />

            {/* Age */}
            <label>Age:</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            /><br />

            {/* City */}
            <label>City:</label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            /><br />

            {/* Aadhar Number */}
            <label>Aadhar Number:</label>
            <input
              type="text"
              value={aadharNumber}
              onChange={(e) => setAadharNumber(e.target.value)}
              required
            /><br />

            {/* Gender */}
            <label>Gender:</label>
            <div className="gender-options">
              <label>
                <input type="radio" value="M" onChange={() => setGender('M')} />
                Male
              </label>
              <label>
                <input type="radio" value="F" onChange={() => setGender('F')} />
                Female
              </label>
              <label>
                <input type="radio" value="O" onChange={() => setGender('O')} />
                Other
              </label>
            </div><br />



            {/* Confirmation */}
            <div className="terms-conditions">
              <input
                type="checkbox"
                checked={confirmation}
                onChange={() => setConfirmation(!confirmation)}
              />
              <span>I have read and agreed with the Terms and Conditions</span>
            </div>



            {/* Register Button */}
            <button type="button" onClick={handleRegister} disabled={!confirmation} className="register-button">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegistrationPage;

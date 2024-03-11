const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3001;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'meowmeow',
    database: 'railway'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to MySQL database');
});
app.use(bodyParser.json());
app.use(cors());

app.get('/home', (req, res) => {
    res.send('Welcome to the home page');
});

// API to fetch all users
app.get('/users', (req, res) => {
    const sql = 'SELECT * FROM user';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).json({ error: 'An error occurred while fetching data from the database' });
            return;
        }
        res.status(200).json(results);
    });
});


// API to fetch all trains
app.get('/trains', (req, res) => {
    const sql = 'SELECT * FROM train';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).json({ error: 'An error occurred while fetching data from the database' });
            return;
        }
        res.status(200).json(results);
    });
});


// API to fetch all tickets
app.post('/book-ticket', (req, res) => {
    const { curr_station, destination, date } = req.body; 
    const ticketId = Math.floor(Math.random() * 90) + 10;
    const sql = `INSERT INTO tickets (ticket_id, start_station, destination, t_date) VALUES (?, ?, ?, ?)`;
    db.query(sql, [ticketId, curr_station, destination, date], (err, result) => {
        if (err) {
            console.error('Error booking ticket:', err);
            res.status(500).json({ error: 'An error occurred while booking the ticket' });
            return;
        }
        console.log('Ticket booked successfully');
        res.status(200).json({ message: 'Ticket booked successfully' });
    });
});
  

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const sql = 'SELECT * FROM user WHERE user_name = ? AND user_aadhaar = ?';
    db.query(sql, [username, password], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).json({ error: 'An error occurred while processing your request' });
            return;
        }      
        if (results.length === 0) {
            res.status(401).json({ error: 'Invalid username or password' });
            return;
        }
        res.status(200).json({ message: 'Login successful', user: results[0], redirectTo: '/tickets'});
    });
});

app.post('/register', (req, res) => {
    const { username, age, city, email, gender, aadharNumber, phoneNumber } = req.body;
    const userId = Math.floor(Math.random() * 90) + 10; // Generate user_id
    const sql = `INSERT INTO user (user_id, user_name, user_age, user_address, user_email, user_gender, user_aadhaar, user_number) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    db.query(sql, [userId, username, age, city, email, gender, aadharNumber, phoneNumber], (err, result) => {
      if (err) {
        console.error('Error registering user:', err);
        res.status(500).json({ error: 'An error occurred while registering the user' });
        return;
      }
      console.log('User registered successfully '+userId);
      res.status(200).json({ message: 'User registered successfully', username });
    });
  });
  


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
//import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav';
import LoginForm from './components/LoginForm/LoginForm';
import Ticket from './components/Tickets/Tickets'
import RegistrationPage from './components/RegistrationPage/RegistrationPage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Availability from './components/Availability/Availability';

function App() {
  return (
    <Router>
      <div className="App">
         <Nav />
          <Routes>
            <Route path="/login" exact element={<LoginForm />} />
            <Route path="/" exact element={<LoginForm />} />
            <Route path="/tickets" exact element={<Ticket />} />
            <Route path="/Availability" exact element={<Availability />} />
            <Route path="/RegistrationPage" exact element={<RegistrationPage />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;




import React from 'react'; // ES6 js
import './Nav.css';
import {Link} from 'react-router-dom';

function Nav() {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark top">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navMainMenu" aria-controls="navMainMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div id="navMainMenu" class="navbar-collapse collapse">
            <div className='heading'>Indian Railways</div>
                <div className="navbar-nav ml-auto">
                    {/* <Link to='/' className="nav-item nav-link active">Login</Link> */}
                    <Link to='/' className="nav-item nav-link">Home</Link>
                    <Link to='/RegistrationPage' className="nav-item nav-link">Register</Link>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
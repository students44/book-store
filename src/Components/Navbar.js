import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';


export default function Navbar(props) {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const ShowLoginForm = () => {
    setShowLoginForm(!showLoginForm); // Toggle the login form
  };



//   submit button function
const submit = (e)=>{
    e.preventDefault(); // prevent page reload
    console.log('Email:', email);
    console.log('Password:', password);

  // Show sweet alert
  Swal.fire({
    icon: 'success',
    title: 'Login Successful!',
    text: `Welcome back, ${email}`,
    timer: 2000,
    showConfirmButton: false,
  });
    //clear inputs
    setEmail("");
    setPassword("");
}
const [showPassword, setShowPassword] = useState(false);

  return (
  

    <>
      <div className='container-fluid'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/navbar">{props.navbar}</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" ></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">{props.home}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">{props.link}</a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {props.dropdown}
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">{props.disabled}</a>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link" to="/Contact">Contact</Link>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0 d-flex mx-auto">
              <button
                type="button"
                className="btn btn-success my-2 my-sm-0 ms-3"
                onClick={ShowLoginForm}
              >
                Login
              </button>
            </form>
          </div>
        </nav>
        
      <div className='container'>
        <div className='row'>
            <div className='col-md-8 col-sm-12 mx-auto'>

            {showLoginForm && (
      <form className="mt-3 p-5 border rounded bg-light  mx-auto" onSubmit={submit}>
       <h4 className="mb-4 text-center">Login</h4>

    {/* Email Input with icon */}
    <div className="mb-3 position-relative">
      <label htmlFor="email" className="form-label">Email address</label>
      <div className="input-group">
        <span className="input-group-text">
          <i className="bi bi-person-fill"></i>
        </span>
        <input
          type="email"
          className="form-control "
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
    </div>

    {/* Password Input with icon and toggle */}
    <div className="mb-3 position-relative">
      <label htmlFor="password" className="form-label">Password</label>
      <div className="input-group">
        <span className="input-group-text">
          <i className="bi bi-lock-fill"></i>
        </span>
        <input
          type={showPassword ? 'text' : 'password'}
          className="form-control"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <span
          className="input-group-text"
          onClick={() => setShowPassword(!showPassword)}
          style={{ cursor: 'pointer' }}
        >
          <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
        </span>
      </div>
    </div>

    <div className="d-grid gap-2">
      <button type="submit" className="btn btn-primary">Login</button>
    </div>
  </form>
)}

            </div>
        </div>
      </div>

        {/* Login Form */}

      </div>
    </>
  );
}

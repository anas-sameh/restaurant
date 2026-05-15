import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.css';

const Login = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleLogin = async (e) => {

    e.preventDefault();

    setLoading(true);

    try {

      const response = await axios.post(
        'http://localhost:8080/auth/login',
        formData
      );

      const data = response.data;

      // save user data
      localStorage.setItem('token', data.token);
      localStorage.setItem('userName', data.name);
      localStorage.setItem('userEmail', data.email);
      localStorage.setItem('userRole', data.role);

      alert(`Welcome back, ${data.name}!`);


        navigate('/');


      // refresh navbar state
      window.location.reload();

    } catch (error) {

      console.error('Login error:', error);

      const message =
        error.response?.data?.message ||
        error.response?.data ||
        'Invalid email or password!';

      alert(message);

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="auth-container">

      <div className="auth-card">

        <h1>Welcome back</h1>

        <form className="auth-form" onSubmit={handleLogin}>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="btn-primary"
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Log in'}
          </button>

        </form>

        <p>
          Don't have an account?{' '}
          <Link to="/signup">Sign up</Link>
        </p>

      </div>

    </div>
  );
};

export default Login;
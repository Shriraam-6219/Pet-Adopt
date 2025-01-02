import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css'; // Optional: Use CSS for styling
import Dawg from '../assets/dawg.png'

const NavigationBar = () => {
  const [location, setLocation] = React.useState('Select Location'); // Current delivery location

  const handleLocationChange = () => {
    const newLocation = prompt('Enter your location:');
    if (newLocation) setLocation(newLocation);
  };

  return (
    <nav className="navigation-bar">
      {/* Logo */}
      <div className="nav-logo">
        <Link to="/">
          <img src={Dawg} alt="Pet Adopt" className="logo" />
        </Link>
      </div>

      {/* Deliver to Location */}
      <div className="nav-location" onClick={handleLocationChange}>
        <span>Deliver to</span>
        <span>{location}</span>
      </div>

      {/* Search Bar */}
      <div className="nav-search">
        <input type="text" placeholder="Search for pets or services..." className="search-input" />
        <button className="search-button">Search</button>
      </div>

      {/* Language Preference */}
      <div className="nav-language">
        <select className="language-select">
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
          <option value="hi">हिन्दी</option>
        </select>
      </div>

      {/* Account & Lists */}
      <div className="nav-account">
        <Link to="/account">
          <span>Account & Lists</span>
        </Link>
      </div>

      {/* Returns & Orders */}
      <div className="nav-orders">
        <Link to="/orders">
          <span>Returns & Orders</span>
        </Link>
      </div>

      {/* Cart */}
      <div className="nav-cart">
        <Link to="/cart">
          <span>Cart</span>
        </Link>
      </div>
    </nav>
  );
};

export default NavigationBar;

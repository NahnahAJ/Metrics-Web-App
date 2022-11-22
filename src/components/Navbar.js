import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Navbar.modules.css';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="consDisplay">
      <button type="button" key={Date.now()} onClick={() => navigate(-1)}>back key</button>
      <h2>Components</h2>
      <p>mic</p>
      <p>settings</p>
    </div>
  );
};

export default Navbar;

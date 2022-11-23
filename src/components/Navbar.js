import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaAngleLeft, FaMicrophone } from 'react-icons/fa';
import { AiOutlineSetting } from 'react-icons/ai';
import '../styles/Navbar.modules.css';
// FaSistrix search

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="consDisplay displays">
      <button className="backBtn iconSize" type="button" key={Date.now()} onClick={() => navigate(-1)} aria-label="Back"><FaAngleLeft /></button>
      <h2>Vintage Collections</h2>
      <div className="iconsCtn displays">
        <span className="iconSize"><FaMicrophone /></span>
        <span className="iconSize"><AiOutlineSetting /></span>
      </div>
    </nav>
  );
};

export default Navbar;

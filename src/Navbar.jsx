import React from "react";
import "../Styles/Navbar.css";

function Navbar() {
  function handleHome() {
    window.location.reload();
  }

  return (
    <div className="nav">
      <h1 id="logo" onClick={handleHome}>
        Calendy
      </h1>
      <ul className="nav-list">
        <li>
          <a href="#" id="style-2" data-replace="Schedule">
            <span>Schedule</span>
          </a>
        </li>
        <li>
          <a href="#" id="style-2" data-replace="Work">
            <span>Work</span>
          </a>
        </li>
        <li>
          <a href="#" id="style-2" data-replace="Productivity">
            <span>Productivity</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

import "./Navbar.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    if (isDark) {
      document.body.classList.add("darkmode");
    } else {
      document.body.classList.remove("darkmode");
    }
  }, [isDark]);
  function handleClick() {
    setIsDark(!isDark);
  }
  return (
    <div>
      <ul className="nav">
        <li id="portfolio">Portfolio</li>
        <li>
          <Link className="link" to="/home">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="link" to="/contact">
            ContactUs
          </Link>
        </li>
        <li>
          <Link className="link" to="/projects">
            Projects
          </Link>
        </li>
        <li id="mode" onClick={handleClick}>
          {isDark ? "🌞" : "🌑"}
        </li>
        {/* <li className="hide">k</li> */}
      </ul>
    </div>
  );
}

export default Navbar;

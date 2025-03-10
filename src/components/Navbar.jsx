import React, { useState, useEffect } from "react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="nav">
      <nav
        className={`navbar navbar-expand-lg ${isScrolled ? "scrolled" : ""}`}
      >
        <div className="container-fluid">
          <div className="brand-name">
            <h1>MYSORE MOTORS</h1>
          </div>
          {/* Dropdown button for smaller screens */}
          <button
            className="navbar-toggler"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
          >
            <span className="navbar-toggler-icon">
              <img src="/menu_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg" alt="" />
            </span>
          </button>

          <div
            className={`navbar-collapse ${isOpen ? "show" : ""}`}
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <div className="left-links">
                <a className="nav-link active" href="#">
                  HOME
                </a>
                <a className="nav-link" href="#">
                  COMPANIES
                </a>
                <a className="nav-link" href="#">
                  PRODUCTS
                </a>
                <a className="nav-link" href="#">
                  SUPPORT
                </a>
                <a className="nav-link disabled" href="#">
                  LOGIN
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

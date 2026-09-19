import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    {
      to: "/",
      label: "Inicio",
      icon: "🏠",
    },
    {
      to: "/lo-que-siento",
      label: "Lo que siento",
      icon: "💗",
    },
    {
      to: "/por-que-me-enamore",
      label: "Por qué tú",
      icon: "🩷",
    },
    {
      to: "/lo-que-sueno",
      label: "Lo que sueño",
      icon: "🎀",
    },
    {
      to: "/tu-y-yo",
      label: "Tú y yo",
      icon: "🌸",
    },
    {
      to: "/canciones",
      label: "Canciones",
      icon: "🎵",
    },
    {
      to: "/para-ti",
      label: "Para ti",
      icon: "💌",
    },
  ];

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${menuOpen ? "menu-open" : ""}`}>
      <div className="nav-container">

        <NavLink
          to="/"
          className="logo"
          onClick={handleLinkClick}
        >
          A <span>🎀</span> V
        </NavLink>

        <button
          type="button"
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>

          <div className="mobile-menu-header">
            <span>Un pequeño recorrido por nosotros</span>
            <span className="mobile-menu-heart">♡</span>
          </div>

          {navItems.map((item, index) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              onClick={handleLinkClick}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              style={{
                "--menu-index": index,
              }}
            >
              <span className="nav-link-icon">
                {item.icon}
              </span>

              <span className="nav-link-text">
                {item.label}
              </span>

              <span className="nav-link-arrow">
                →
              </span>
            </NavLink>
          ))}

          <div className="mobile-menu-footer">
            Hecho con todo mi amor 🎀
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
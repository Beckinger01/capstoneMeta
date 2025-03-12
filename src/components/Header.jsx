import React from "react";

const Header = () => {
  return (
    <header
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        alignItems: "center",
        padding: "20px",
        gap: "20px",
        borderBottom: "2px solid #eaeaea",
      }}
    >
      <img
        src="/icons_assets/Logo.svg"
        alt="Logo"
        style={{
          gridColumn: "3 / 5",
          width: "150px",
        }}
      />
      <nav
        style={{
          gridColumn: "6 / 12",
        }}
      >
        <ul
          style={{
            display: "flex",
            justifyContent: "space-around",
            margin: "0",
            padding: "0",
            listStyle: "none",
          }}
        >
          <li><a href="/" style={{ color: "inherit", textDecoration: "none" }}>Home</a></li>
          <li><a href="/" style={{ color: "inherit", textDecoration: "none" }}>About</a></li>
          <li><a href="/" style={{ color: "inherit", textDecoration: "none" }}>Menu</a></li>
          <li><a href="/" style={{ color: "inherit", textDecoration: "none" }}>Reservations</a></li>
          <li><a href="/" style={{ color: "inherit", textDecoration: "none" }}>Order Online</a></li>
          <li><a href="/" style={{ color: "inherit", textDecoration: "none" }}>Login</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
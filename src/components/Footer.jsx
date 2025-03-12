import React from "react";

const Footer = () => {
    return (
        <footer style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "20px",
            padding: "20px",
            backgroundColor: "#495E57",
            color: "white",
            justifyContent: "center",  // Center the content horizontally
        }}>
            <div style={{ gridColumn: "4 / 6" }}>
                <h1>Navigation</h1>
                <nav>
                    <ul style={{
                        listStyle: "none",
                        padding: "0",
                        margin: "0",
                    }}>
                        <li><a href="/" style={{ color: "inherit", textDecoration: "none" }}>Home</a></li>
                        <li><a href="/" style={{ color: "inherit", textDecoration: "none" }}>About</a></li>
                        <li><a href="/" style={{ color: "inherit", textDecoration: "none" }}>Menu</a></li>
                        <li><a href="/" style={{ color: "inherit", textDecoration: "none" }}>Reservations</a></li>
                        <li><a href="/" style={{ color: "inherit", textDecoration: "none" }}>Order Online</a></li>
                        <li><a href="/" style={{ color: "inherit", textDecoration: "none" }}>Login</a></li>
                    </ul>
                </nav>
            </div>
            <div style={{ gridColumn: "6 / 8" }}>
                <h1>Contact</h1>
                <nav>
                    <ul style={{
                        listStyle: "none",
                        padding: "0",
                        margin: "0",
                    }}>
                        <li><a href="/" style={{ color: "inherit", textDecoration: "none" }}>Address</a></li>
                        <li><a href="/" style={{ color: "inherit", textDecoration: "none" }}>Phone Number</a></li>
                        <li><a href="/" style={{ color: "inherit", textDecoration: "none" }}>Email</a></li>
                    </ul>
                </nav>
            </div>
            <div style={{ gridColumn: "8 / 10" }}>
                <h1>Social Media</h1>
                <nav>
                    <ul style={{
                        listStyle: "none",
                        padding: "0",
                        margin: "0",
                    }}>
                        <li><a href="/" style={{ color: "inherit", textDecoration: "none" }}>Instagram</a></li>
                        <li><a href="/" style={{ color: "inherit", textDecoration: "none" }}>Facebook</a></li>
                        <li><a href="/" style={{ color: "inherit", textDecoration: "none" }}>X</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
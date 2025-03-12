import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
    const navigate = useNavigate();

    const handleReserveClick = () => {
        navigate("/booking");
    };

    return (
        <section
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(12, 1fr)",
                alignItems: "center",
                padding: "20px",
                gap: "20px",
                backgroundColor: "#495E57",
                position: "relative",
            }}
        >
            <div style={{ gridColumn: "3 / 6" }}>
                <h1
                    style={{
                        fontSize: "40pt", // Subtitle with 40pt font size
                        fontWeight: "regular",
                        marginBottom: "10px",
                        color: "#F4CE14",
                    }}
                >
                    Little Lemon
                </h1>
                <h2
                    style={{
                        color: "white",
                        fontSize: "18pt", // Lead text with 18pt font size
                        fontWeight: "medium",
                    }}
                >
                    Chicago
                </h2>
                <p
                    style={{
                        color: "white",
                        fontSize: "18pt", // Lead text with 18pt font size
                        fontWeight: "medium",
                    }}
                >
                    We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                </p>
                <button
                    onClick={handleReserveClick}
                    style={{
                        backgroundColor: "#F4CE14",
                        color: "#495E57",
                        fontSize: "18pt",
                        padding: "10px 20px",
                        border: "none",
                        borderRadius: "16px",
                        cursor: "pointer",
                    }}
                >
                    Reserve a Table
                </button>
            </div>
            <img
                src="/icons_assets/restauranfood.jpg"
                alt="Food Pic"
                width={500}
                style={{
                    gridColumn: "8 / 12",
                    marginBottom: "-100px",
                    borderRadius: "16px",
                }}
            />
        </section>
    );
};

export default HeroSection;
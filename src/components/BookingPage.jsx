import React from "react";
import BookingForm from "./BookingForm";

const BookingPage = () => {
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(12, 1fr)",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                backgroundColor: "#f7f7f7",
                padding: "20px",
            }}
        >
            <div
                style={{
                    gridColumn: "4 / 10",
                    display: "grid",
                    gap: "20px",
                    justifyItems: "center",
                    backgroundColor: "#fff",
                    padding: "40px",
                    borderRadius: "12px",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                    textAlign: "center",
                }}
            >
                <h1 style={{ fontSize: "2rem", color: "#333" }}>Book a Table</h1>
                <BookingForm />
            </div>
        </div>
    );
};

export default BookingPage;

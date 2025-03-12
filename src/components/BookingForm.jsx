import React, { useState } from "react";

const BookingForm = () => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("");
    const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00"]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ date, time, guests, occasion });
    };

    return (
        <form
            onSubmit={handleSubmit}
            style={{
                display: "grid",
                maxWidth: "300px",
                gap: "15px",
                padding: "20px",
                backgroundColor: "#fff",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
            }}
        >
            <label htmlFor="res-date" style={{ fontWeight: "bold" }}>Choose date</label>
            <input
                type="date"
                id="res-date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                style={inputStyle}
            />

            <label htmlFor="res-time" style={{ fontWeight: "bold" }}>Choose time</label>
            <select
                id="res-time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
                style={inputStyle}
            >
                {availableTimes.map((time) => (
                    <option key={time} value={time}>{time}</option>
                ))}
            </select>

            <label htmlFor="guests" style={{ fontWeight: "bold" }}>Number of guests</label>
            <input
                type="number"
                id="guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                min="1"
                max="10"
                required
                style={inputStyle}
            />

            <label htmlFor="occasion" style={{ fontWeight: "bold" }}>Occasion</label>
            <select
                id="occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                required
                style={inputStyle}
            >
                <option value="">Select an occasion</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>

            <button
                type="submit"
                style={{
                    backgroundColor: "#4CAF50",
                    color: "white",
                    padding: "10px",
                    border: "none",
                    borderRadius: "5px",
                    fontSize: "16px",
                    cursor: "pointer",
                    transition: "background 0.3s"
                }}
            >
                Submit Reservation
            </button>
        </form>
    );
};

const inputStyle = {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px"
};

export default BookingForm;

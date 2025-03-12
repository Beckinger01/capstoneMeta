import React from "react";

const CardTesters = ({ photo, name, rating, feedback }) => {
    return (
        <div style={{
            borderRadius: "16px",
            border: "4px solid #F4CE14",
            padding: "2rem 6rem",
            textAlign: "center",
            backgroundColor: "#FBDABB",
            maxWidth: "300px",
            margin: "0 auto",
        }}>
            <h1 style={{
                fontSize: "18pt",
                fontWeight: "bold",
                margin: "10px 0",
                color: "#495E57",
            }}>{name}</h1>
            <img src={photo} alt={name} style={{
                width: "100%",
                borderRadius: "16px",
                height: "200px",
                objectFit: "cover",
                margin: "20px 0",
            }}/>
            <p style={{
                fontSize: "16pt",
                color: "#495E57",
                wordWrap: "break-word",
                maxWidth: "100%",
            }}>{feedback}</p>
            <p style={{
                fontSize: "16pt",
            }}>{rating}</p>
        </div>
    );
}

export default CardTesters;
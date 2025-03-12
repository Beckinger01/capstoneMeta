import React from "react";

const Card = ({ img, name, price, description }) => {
    return (
        <div style={{
            border: "1px solid #eaeaea",
            borderRadius: "16px",
            padding: "20px",
            textAlign: "center",
            backgroundColor: "#FBDABB",
            maxWidth: "300px",
            margin: "0 auto",
        }}>
            <img src={img} alt={name} style={{ width: "100%", borderRadius: "16px", height: "150px", objectFit: "cover" }} />
            <div style={{ margin: "20px 0" }}>
                <h2 style={{ fontSize: "18pt", fontWeight: "bold", margin: "10px 0" }}>{name}</h2>
                <p style={{ fontSize: "16pt", fontWeight: "medium", color: "#495E57" }}>{price}</p>
            </div>
            <p style={{
                fontSize: "16pt",
                color: "#495E57",
                wordWrap: "break-word",
                maxWidth: "100%",
            }}>{description}</p>
        </div>
    );
}

export default Card;
import React from "react";
import Card from "./Card";

const Highlights = () => {
    return (
        <section style={{ padding: "10rem 0" }}>
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(12, 1fr)",
                gap: "20px",
                marginBottom: "20px",
                alignItems: "center",
            }}>
                <h1 style={{
                    gridColumn: "2 / 9",
                    fontSize: "40pt",
                    fontWeight: "regular",
                }}>Specials</h1>
                <div style={{
                    gridColumn: "10 / 12",
                    display: "flex",
                    justifyContent: "flex-end",
                }}>
                    <button style={{
                        backgroundColor: "#F4CE14",
                        color: "#495E57",
                        fontSize: "18pt",
                        border: "none",
                        borderRadius: "16px",
                        cursor: "pointer",
                        width: "200px",
                        height: "50px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>Online Menu</button>
                </div>
            </div>
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(12, 1fr)",
                gap: "20px",
            }}>
                <div style={{
                    gridColumn: "1 / 13",
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "20px",
                }}>
                    <Card
                        img="/icons_assets/greek salad.jpg"
                        name="Greek Salad"
                        price="$12.99"
                        description="The Famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
                    />
                    <Card
                        img="/icons_assets/greek salad.jpg"
                        name="Bruchetta"
                        price="$5.99"
                        description="Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
                    />
                    <Card
                        img="/icons_assets/greek salad.jpg"
                        name="Lemon Dessert"
                        price="$5.00"
                        description="This comes straight from grandma's recipe book, every last ingredient has been sourced and is authentic as can be imagined."
                    />
                </div>
            </div>
        </section>
    );
}

export default Highlights;
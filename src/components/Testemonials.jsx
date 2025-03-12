import React from "react";
import CardTesters from "./CardTesters";

const Testemonials = () => {
    return (
        <section style={{
            padding: "10rem 0",
            backgroundColor: "#495E57",}}>
            <h1 style={{
                textAlign: "center",
                color: "#F4CE14",
                fontSize: "40pt",
                fontWeight: "regular",
            }}>Testemonials</h1>
            <div style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                flexWrap: "wrap",
            }}>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "20px",
                    flexWrap: "wrap",
                    maxWidth: "100%",
                }}>
                    <CardTesters
                        photo="https://placehold.co/100x200"
                        name="Anna Maier"
                        rating="5/5"
                        feedback="Good Job!"
                    />
                    <CardTesters
                        photo="https://placehold.co/100x200"
                        name="Anna Maier"
                        rating="5/5"
                        feedback="Good Job!"
                    />
                    <CardTesters
                        photo="https://placehold.co/100x200"
                        name="Anna Maier"
                        rating="5/5"
                        feedback="Good Job!"
                    />
                    <CardTesters
                        photo="https://placehold.co/100x200"
                        name="Anna Maier"
                        rating="5/5"
                        feedback="Good Job!"
                    />
                </div>
            </div>
        </section>
    );
};

export default Testemonials;
import React from "react";

const About = () => {
    return (
        <section style={{
            padding: "10rem 0",
            display: "grid", gridTemplateColumns: "repeat(12, 1fr)",
            gap: "20px", alignItems: "center"
        }}>
            <div style={{
                gridColumn: "3 / 7"
            }}>
                <h1 style={{
                    fontSize: "40pt",
                }}>Little Lemon</h1>
                <h1 style={{
                    fontSize: "18pt",
                }}>Chicago</h1>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            </div>
            <img src="/icons_assets/Mario and Adrian b.jpg" alt="Marco and Adrian" style={{
                gridColumn: "7 / 11",
                width: "100%",
                borderRadius: "16px"
            }} />
        </section>
    );
};

export default About;
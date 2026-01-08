import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Organizers.css";

// Avatar
import Aman from "../assets/Aman.jpg";
import Arpit from "../assets/Arpit.jpg";
import Pranjal from "../assets/Pranjal.png";

const organizers = [
    {
        id: 1,
        name: "Arpit Srivastava",
        role: "Overlooking Co-ordinator - Robotics & Engg. Dwg. TechnoCrats GSV",
        image: Arpit,
        phone: <a href={"tel:9696579460"}>+91 - 9696579460</a>,
        email: <a href={"mailto:aman.choudhary_btech23@gsv.ac.in"}>aman.choudhary_btech23@gsv.ac.in</a>,
    },
    {
        id: 2,
        name: "Aman Choudhary",
        role: "Domain Head - Robotics & Engg. Dwg. TechnoCrats GSV",
        image: Aman,
        phone: <a href={"tel:7987347287"}>+91 - 7987347287</a>,
        email: <a href={"mailto:arpit.srivastava_btech23@gsv.ac.in"}>arpit.srivastava_btech23@gsv.ac.in</a>,
    },
    {
        id: 3,
        name: "Pranjal Chaturvedi",
        role: "Domain Co-ordinator - Robotics & Engg. Dwg. TechnoCrats GSV",
        image: Pranjal,
        phone: <a href={"tel:7878330376"}>+91-7878330376</a>,
        email: <a href={"mailto:pranjal.chaturvedi_btech24@gsv.ac.in"}>pranjal.chaturvedi_btech24@gsv.ac.in</a>,
    },
];

const Organizers = () => {
    const [activeCard, setActiveCard] = useState(null);

    const handleToggle = (id) => {
        setActiveCard(activeCard === id ? null : id);
    };

    return (
        <>
            <Navbar />

            <div className="organizers-wrapper">
                <h1 className="organizers-title">
                    Meet Our <span>Team</span>
                </h1>

                <div className="organizers-grid">
                    {organizers.map((person) => {
                        const isExpanded = activeCard === person.id;

                        return (
                            <div
                                key={person.id}
                                className={`organizer-card ${isExpanded ? "expanded" : ""}`}
                            >
                                <div className="image-container">
                                    <img src={person.image} alt={person.name} />
                                </div>

                                <h3>{person.name}</h3>
                                <p>{person.role}</p>

                                {/* CONTACT DETAILS (EXPAND AREA) */}
                                {isExpanded && (
                                    <div className="contact-details">
                                        <p>
                                            <strong>Phone:</strong> {person.phone}
                                        </p>
                                        <p>
                                            <strong>Email:</strong> {person.email}
                                        </p>
                                    </div>
                                )}

                                <div
                                    className="social-pill"
                                    onClick={() => handleToggle(person.id)}
                                >
                                    {isExpanded ? "Close" : "Contact"}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Organizers;

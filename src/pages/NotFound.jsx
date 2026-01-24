import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "80vh",
            textAlign: "center",
            color: "var(--theme-color)"
        }}>
            <h1 style={{ fontSize: "5rem", margin: 0 }}>404</h1>
            <h2 style={{ color: "#fff", marginBottom: "2rem" }}>Page Not Found</h2>
            <p style={{ color: "#ccc", maxWidth: "400px", marginBottom: "2rem" }}>
                The page you are looking for does not exist or has been moved.
            </p>
            <Link to="/" className="cta-primary">
                Return Home
            </Link>
        </div>
    );
};

export default NotFound;

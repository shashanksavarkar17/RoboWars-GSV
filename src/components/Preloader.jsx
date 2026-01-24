import React, { useEffect, useState } from "react";
import "./Preloader.css";

const Preloader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [text, setText] = useState("INITIALIZING SYSTEM...");

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(onComplete, 500); // Wait a bit before unmounting
                    return 100;
                }

                // Randomly update text based on progress
                if (prev === 30) setText("LOADING ASSETS...");
                if (prev === 60) setText("CONNECTING TO MAINFRAME...");
                if (prev === 90) setText("ACCESS GRANTED.");

                return prev + Math.floor(Math.random() * 10) + 1;
            });
        }, 150);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className="preloader-container">
            <div className="scanner-line"></div>
            <div className="loader-content">
                <div className="loader-text">{text}</div>
                <div className="progress-bar-track">
                    <div
                        className="progress-bar-fill"
                        style={{ width: `${Math.min(progress, 100)}%` }}
                    ></div>
                </div>
                <div className="percentage">{Math.min(progress, 100)}%</div>
            </div>
        </div>
    );
};

export default Preloader;

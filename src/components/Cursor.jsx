import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Cursor.css";

const Cursor = () => {
    const cursorRef = useRef(null);
    const followerRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;

        const moveCursor = (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
            });
            gsap.to(follower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.3,
            });
        };

        const handleHover = () => {
            gsap.to(cursor, { scale: 0.5, duration: 0.3 });
            gsap.to(follower, { scale: 3, opacity: 0.5, backgroundColor: "var(--theme-color)", duration: 0.3 });
        };

        const handleUnhover = () => {
            gsap.to(cursor, { scale: 1, duration: 0.3 });
            gsap.to(follower, { scale: 1, opacity: 1, backgroundColor: "transparent", duration: 0.3 });
        };

        document.addEventListener("mousemove", moveCursor);

        // Add listeners to clickable elements
        const clickables = document.querySelectorAll("a, button, .clickable");
        clickables.forEach((el) => {
            el.addEventListener("mouseenter", handleHover);
            el.addEventListener("mouseleave", handleUnhover);
        });

        return () => {
            document.removeEventListener("mousemove", moveCursor);
            clickables.forEach((el) => {
                el.removeEventListener("mouseenter", handleHover);
                el.removeEventListener("mouseleave", handleUnhover);
            });
        };
    }, []);

    return (
        <>
            <div ref={cursorRef} className="cursor-dot"></div>
            <div ref={followerRef} className="cursor-follower"></div>
        </>
    );
};

export default Cursor;

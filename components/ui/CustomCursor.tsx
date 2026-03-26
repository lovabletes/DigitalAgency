"use client";

import React, { useEffect, useState, useRef } from "react";

export function CustomCursor() {
    const [isHovering, setIsHovering] = useState(false);
    const cursorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            if (cursorRef.current) {
                cursorRef.current.style.left = `${e.clientX}px`;
                cursorRef.current.style.top = `${e.clientY}px`;
            }
        };

        const handleHover = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === "BUTTON" || 
                target.tagName === "A" || 
                target.closest("button") || 
                target.closest("a")
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleHover);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleHover);
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className={`fixed top-0 left-0 w-8 h-8 rounded-full border border-accent pointer-events-none z-[9999] mix-blend-difference hidden lg:block transition-transform duration-200 ease-out ${
                isHovering ? "scale-[2.5]" : "scale-100"
            }`}
            style={{
                transform: "translate(-50%, -50%)",
                backgroundColor: isHovering ? "rgba(247, 231, 206, 0.2)" : "transparent",
            }}
        >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-accent rounded-full" />
        </div>
    );
}

"use client";

import React, { useState, useEffect } from 'react';
import LargeNavbar from './LargeNavbar';
import MobileNavbar from './MobileNavbar';

const Navbar = () => {
    const [showHamBurger, setShowHamBurger] = useState(false);

    useEffect(() => {
        function handleResize() {
            setShowHamBurger(window.innerWidth < 1280);
        }
        handleResize(); // Check window width once after mount
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div>
            {showHamBurger ? <MobileNavbar /> : <LargeNavbar />}
        </div>
    );
}

export default Navbar;

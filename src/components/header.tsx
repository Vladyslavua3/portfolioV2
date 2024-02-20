"use client"

import React from "react";
import Navbar from "@/components/ui/navbar";


const Header = () => {
    return (
        <header className={'flex flex-row items-center justify-around'}>
            <Navbar />
        </header>
    );
};

export default Header;
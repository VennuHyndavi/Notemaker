import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
    return (
        <div className="bg-[#121212]  text-[#E2DFD2]">
            <Navbar />
            <Outlet />
        </div>
    )
}

export default Layout
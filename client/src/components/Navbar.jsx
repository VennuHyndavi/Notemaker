import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <nav className="bg-[#121212] flex px-16 py-4 items-center justify-between border-b-[1px]
         border-[#E2DFD2] max-[492px]:px-4">
            <Link to={'/'}>
                <h1 className="text-[#E2DFD2] text-3xl font-bold max-[340px]:text-xl">NoteMaker</h1>
            </Link>
            <Link className={`px-4 py-2 rounded-md text-black bg-[#E2DFD2]  max-[340px]:text-sm max-[340px]:px-2`} to={'/createnote'}>Create Note</Link>
        </nav>
    )
}

export default Navbar
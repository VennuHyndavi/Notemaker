import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import axios from "axios";

const Note = ({ id, title, description, created_on, onDelete }) => {
    const navigate = useNavigate();

    const handleDelete = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.delete(`http://127.0.0.1:8000/api/notes/${id}/`);
            onDelete(id);
            navigate("/");
        } catch (error) {
            console.error("Error deleting note:", error);
        }
    };

    return (
        <div key={id} className="shadow-2xl overflow-x-hidden shadow-grey bg-[#454545] rounded-md flex flex-col gap-4 p-4">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl">{title}</h1>
                <div className="flex items-center gap-2">
                    <MdDeleteOutline
                        className="text-red-500 w-10 h-10 hover:rounded-lg p-2 hover:bg-white transition-all duration-300 ease"
                        onClick={handleDelete}
                    />
                    <Link to={`/note/${id}`} className="text-yellow-500 text-[1.5rem] text-center hover:rounded-lg p-2 hover:bg-white transition-all duration-300 ease">
                        <FaEdit />
                    </Link>
                </div>

            </div>
            <div className="flex justify-between text-sm">
                <p>{created_on.split(",")[1]}</p>
                <p>{created_on.split(",")[0]}</p>
            </div>
            <p className="break-words">{description}</p>

        </div>
    );
};

export default Note;


// import React, { useState } from "react";
// import axios from "axios";

// const AddNote = () => {
//     const [note, setNote] = useState({ title: "", description: "" });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setNote((prevNote) => ({
//             ...prevNote,
//             [name]: value,
//         }));
//     };

//     const handleSubmit = async(e) => {
//         e.preventDefault();

//         try {
//             const response = await axios({
//                 url: 'http://127.0.0.1:8000/api/notes/',
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 data: JSON.stringify(note), 
//             });

//             console.log("Note submitted:", response.data);
//             setNote({ title: "", description: "" });
//         } catch (error) {
//             console.error("Error submitting note:", error);
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit} className="my-4 flex flex-col gap-6 w-[500px] justify-center  border-2 border-white px-4 py-6">

//             <h1 className="text-center text-2xl font-semibold">Make Notes</h1>
//             <div className="text-black">
//                 {/* <label htmlFor="title">Title:</label> */}
//                 <input
//                     type="text"
//                     id="title"
//                     name="title"
//                     className="px-4 py-4 rounded-md w-full"
//                     placeholder="Title"
//                     value={note.title}
//                     onChange={handleChange}
//                     required
//                 />
//             </div>
//             <div className="text-black">
//                 {/* <label htmlFor="description">Description:</label> */}
//                 <textarea
//                     id="description"
//                     name="description"
//                     placeholder="description"
//                     value={note.description}
//                     rows={8}
//                     className="px-4 py-4 rounded-md w-full"
//                     onChange={handleChange}
//                     required
//                 />
//             </div>
//             <button type="submit" className="bg-[#E2DFD2] text-black px-4 rounded-md py-4">Add Note</button>
//         </form>
//     );
// };

// export default AddNote;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Form = ({ initialNote, isEditMode, onNoteSaved }) => {
    const [note, setNote] = useState({ title: "", description: "" });
    const navigate = useNavigate();


    useEffect(() => {
        if (initialNote) {
            setNote(initialNote);
        }
    }, [initialNote]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNote((prevNote) => ({
            ...prevNote,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const url = isEditMode
                ? `http://127.0.0.1:8000/api/notes/${note.id}/`
                : 'http://127.0.0.1:8000/api/notes/';

            const method = isEditMode ? 'PUT' : 'POST';

            const response = await axios({
                url,
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
                data: JSON.stringify(note),
            });

            console.log(`${isEditMode ? "Note updated" : "Note submitted"}:`, response.data);
            setNote({ title: "", description: "" });
            navigate('/')
            // if (onNoteSaved) {
            //     onNoteSaved(response.data);
            // }
        } catch (error) {
            console.error(`Error ${isEditMode ? "updating" : "submitting"} note:`, error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="my-4 flex flex-col gap-6 w-[500px] justify-center border-2 border-white px-4 py-6">
            <h1 className="text-center text-2xl font-semibold">
                {isEditMode ? "Update Note" : "Make Notes"}
            </h1>
            <div className="text-black">
                <input
                    type="text"
                    id="title"
                    name="title"
                    className="px-4 py-4 rounded-md w-full"
                    placeholder="Title"
                    value={note.title}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="text-black">
                <textarea
                    id="description"
                    name="description"
                    placeholder="Description"
                    value={note.description}
                    rows={8}
                    className="px-4 py-4 rounded-md w-full"
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit" className="bg-[#E2DFD2] text-black px-4 rounded-md py-4">
                {isEditMode ? "Update Note" : "Add Note"}
            </button>
        </form>
    );
};

export default Form;

import React, { useEffect } from "react";
import useAxios from "../hooks/useAxios";
import { useState } from "react";
import Loading from "../components/Loading";
import Note from "../components/Note";
import axios from "axios";

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    };
    const formattedDate = date.toLocaleString('en-US', options);

    return formattedDate.replace(',', '')
}

const Home = () => {


    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/notes/');
                setNotes(response.data);
            } catch (error) {
                console.error("Error fetching notes:", error);
            }
        };

        fetchNotes();
    }, []);

    const handleDeleteNote = (id) => {
        setNotes(notes.filter(note => note.id !== id));
    };

    if (notes.length === 0) return <Loading />;

    return (
        <div className="min-h-screen flex flex-col px-16 py-8 gap-8">
            <h1 className="text-center text-2xl">Your Notes</h1>
            <div className="grid grid-cols-4 max-[1040px]:grid-cols-3 max-[770px]:grid-cols-2 max-[500px]:grid-cols-1 gap-8">
                {
                    notes && notes.length !== 0 ? (
                        notes.map((item) => {
                            return (
                                <Note id={item.id} title={item.title} description={item.description} created_on={formatDate(item.created_on)} onDelete={handleDeleteNote} />
                            )
                        })
                    ) : ""
                }
            </div>
        </div>
    )
}


export default Home;
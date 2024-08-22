import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Form from "../components/Form";

const UpdateNote = () => {
    const { id } = useParams();
    console.log(id);

    const [data, setData] = useState({});

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await axios.request({
                    url: `http://127.0.0.1:8000/api/notes/${id}`,
                    method: "get",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                setData(response.data);
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])

    return (
        <div className="flex min-h-screen justify-center items-center">
            {
                data ? (
                    <Form initialNote={data} isEditMode={true} onNoteSaved={(updatedNote) => console.log("Note updated:", updatedNote)} />
                ) : ""
            }
        </div>
    )
}


export default UpdateNote
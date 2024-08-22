import React from "react";
import Form from "../components/Form";


const CreateNote = () => {
    return (
        <div className="flex min-h-screen justify-center items-center">
           <Form isEditMode={false} onNoteSaved={(savedNote) => console.log("Note saved:", savedNote)} />
        </div>
    );
}


export default CreateNote;
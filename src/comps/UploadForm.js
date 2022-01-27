import React, { useState } from "react";

const UploadForm = () => {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg'];

    const changeHandler = (picture) => {
        let selected = picture.target.files[0];
        
        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('Merci de selectionner une image (png ou jpeg)');
        }
    }
    return (
        <form>
            <input type="file" onChange={changeHandler}></input>
            <div className="output">
                { error && <div className="error"> { error } </div> }
                { file && <div className="file"> { file.name } </div> }
            </div>
        </form>
    )
}

export default UploadForm;
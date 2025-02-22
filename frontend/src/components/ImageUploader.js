// ImageUploader.js
import React, { useState } from 'react';
import { uploadAadhar } from '../api'; // Import the API function

const ImageUploader = () => {
    const [file, setFile] = useState(null);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null); // State to hold error messages

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
        setResponse(null); // Reset response on file change
        setError(null); // Reset error on file change
    };

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('file', file);
        console.log(file)
        try {
            const result = await uploadAadhar(formData);
            console.log(result)
            setResponse(result);
        } catch (error) {
            console.error('Error uploading file:', error);
            setError('Error uploading file. Please try again.'); // Set error message
        }
    };

    return (
        <div>
            <h2>Upload PDF File</h2>
            <div className="form-group" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
              <label>Aadhar Card </label>
              <div className='fileupload' >
              <input type="file" accept=".pdf" onChange={handleFileChange}  name="aadharCard" required />
              </div>
              <div className='upload'>
            <button onClick={handleUpload}>Upload</button>
            </div>
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
            {response && (
                <div>
                    <p>{response.message}</p>
                    <p>File Size: {response}</p> {/* Display file size */}
                </div>
            )}
        </div>
    );
};

export default ImageUploader;
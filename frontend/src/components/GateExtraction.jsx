import React, { useState } from 'react';
import { uploadGate } from '../api.jsx';

const GateExtraction = ({setGateImages,setGateText}) => {
    const [images, setImages] = useState([]); // Store multiple images
   
    const [text, setText] = useState(''); // Ensure text starts as an empty string
    const [file, setFile] = useState(null);
      const [response, setResponse] = useState(null);
        const [error, setError] = useState(null);
    const handleFileChange = (event) => {
   
        setFile(event.target.files[0]);
        setResponse(null); // Reset response on file change
        setError(null); // Reset error on file change

    };

    const handleUpload = async (event) => {
        const formData = new FormData();
        formData.append('file', file);
        console.log(file)

        try {
            const result = await uploadGate(formData);

            console.log("Received Response:", result); // Debugging log

            // Ensure result.images is an array before setting state
            setImages(result.images && result.images.length > 0 
                ? result.images.map(img => `data:image/png;base64,${img}`) 
                : []);

            setGateImages(result.images && result.images.length > 0 
                ? result.images.map(img => `data:image/png;base64,${img}`) 
                : []);
            let s=result.text.split(',')
            setGateText('\t\tGATE DETAILS\n\nName :'+s[0]+'\nDOB :'+s[1]+'\nMark :'+s[2])
            setText(result.text || "No text extracted");  // Set extracted text or a default message

        } catch (error) {
            console.error("Error uploading file:", error);
            setText("Error processing file. Please try again.");
            setImages([]); // Clear images on error
        }
    };

    return (
        <div>
            <div className="form-group" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
            <label >Upload gate</label>
            <input type="file" id="gateFile" accept="image/*,application/pdf" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
            </div>

            {text && (
                <div>
                    <h3>Extracted Text : </h3>
                    <p>{text}</p>
                </div>
            )}
        </div>
    );
};

export default GateExtraction;

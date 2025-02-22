import React, { useState } from 'react';
import { uploadIncome } from '../api.jsx';

const IncomeExtraction = ({setIncomeImages,setIncomeText}) => {
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
            const result = await uploadIncome(formData);

            console.log("Received Response:", result); // Debugging log

            // Ensure result.images is an array before setting state
            setImages(result.images && result.images.length > 0 
                ? result.images.map(img => `data:image/png;base64,${img}`) 
                : []);

            setIncomeImages(result.images && result.images.length > 0 
                ? result.images.map(img => `data:image/png;base64,${img}`) 
                : []);
            let s=result.text.split(',')
            setIncomeText('\t\tINCOME DETAILS\nName :'+s[0]+'\nIncome :'+s[1]+'\nCertificate number :'+s[2])
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
            <label >Upload income certificate</label>
            <input type="file" id="incomeFile" accept="image/*,application/pdf" onChange={handleFileChange} />
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

export default IncomeExtraction;

import React from 'react';
import './About.css';
import { Link } from 'react-router-dom'


const About = () => {
  return (
    <div className="about-container">
      {/* Exit Button */}
      <button className="exit-button"><Link to={'/'}>Home</Link></button>

      <h1>About AI-Driven Semi-Structured Data Extraction and Verification</h1>
      <p className="main-plot">
        Our project focuses on enhancing the accuracy and efficiency of data entry 
        processes by employing advanced AI algorithms for verifying user-submitted 
        information against official documents. 
      </p>
      <h2>How It Works</h2>
      <div className="steps-container">
        <div className="step-box">
          <strong>Step 1: User Registration</strong> 
          <p>
          The user starts the process by registering for the system. They must fill out a detailed form with personal information, such as their name, address, phone number, email, date of birth, etc. This registration process ensures that the system gathers all necessary details to verify against official documents later.
          </p>
        </div>

        <div className="step-box">
          <strong>Step 2: Data Submission</strong>
          <p>
          After completing the registration form, the user submits it. At this stage, the data is sent to the system for further analysis and comparison against official documents, like government-issued IDs or certificates.
          </p>
        </div>

        <div className="step-box">
          <strong>Step 3: Data Mapping</strong> 
          <p>
          The system then performs an essential process called Data Mapping. This is where the system compares the submitted information against official documents using algorithms, particularly the Levenshtein distance algorithm. This algorithm measures the difference between two sequences (e.g., user-submitted text vs. document details) to detect typos, spelling variations, or small discrepancies
          </p>
        </div>

        <div className="step-box">
          <strong>Step 4: Error Detection</strong> 
          <p>
          If the system identifies any discrepancies between the user-submitted information and the official document, it highlights the areas where mismatches occur. These discrepancies could include spelling mistakes, missing data, or slight variations in the information provided (e.g., "St." vs "Street", or "Prdeep" vs "Pradeep").
          </p>
        </div>

        <div className="step-box">
          <strong>Step 5: User Correction</strong> 
          <p>
          Once discrepancies are detected, the system will allow the user to review and edit the information. The user can correct the flagged areas by providing the accurate data. For example, if the user’s name is misspelled, they can fix it here.
          </p>
        </div>

        <div className="step-box">
          <strong>Step 6: Final Submission</strong> 
          <p>
          After the user has corrected any errors, they can re-submit the form. The system re-checks the corrected data against the official documents, and if everything matches accurately, the form is successfully submitted, completing the registration process.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

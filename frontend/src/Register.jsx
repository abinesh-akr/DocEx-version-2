import React, { useState, useEffect } from "react";
import "./Register.css";
import { Link } from 'react-router-dom'
import img1 from "./assets/1.jpg";
import img2 from "./assets/2.jpg";
import img3 from "./assets/3.jpg";
import img4 from "./assets/4.jpg";
import AadharExtraction from './components/AadharExtraction.jsx';
import IncomeExtraction from './components/IncomeExtraction.jsx';
import GateExtraction from './components/GateExtraction.jsx'

function Register() {

  let defaultAadhar = [
    { label: "Image 1", imgPath: img1 },
    { label: "Image 2", imgPath: img2 },
    { label: "Image 3", imgPath: img3 },
    { label: "Image 4", imgPath: img4 },
  ];
  let defaultGate = [
    { label: "Image 1", imgPath: img1 },
    { label: "Image 2", imgPath: img2 },
    { label: "Image 3", imgPath: img3 },
    { label: "Image 4", imgPath: img4 },
  ];

  let defaultIncome =[
    { label: "Image 1", imgPath: img1 },
    { label: "Image 2", imgPath: img2 },
    { label: "Image 3", imgPath: img3 },
    { label: "Image 4", imgPath: img4 },
  ];

  const [aadharIndex, setAadharIndex] = useState(0);
  const [incomeIndex, setIncomeIndex] = useState(0);
  const [gateIndex, setGateIndex] = useState(0);
  const [communityIndex, setCommunityIndex] = useState(0);
  const [aadharImages, setAadharImages] = useState([]);
  const [aadharText, setAadharText] = useState('');
  const [incomeText, setIncomeText] = useState('');
  const [gateText, setGateText] = useState('');
  const [gateImages, setGateImages] = useState([]);
  const [incomeImages, setIncomeImages] = useState([]);
  
  

  defaultAadhar= aadharImages.length > 0 
  ? aadharImages.map((img, i) => ({ label: `Gate Image ${i + 1}`, imgPath: img }))
  : defaultAadhar;
   
  console.log(aadharImages.length);

  defaultGate = gateImages.length > 0 
  ? gateImages.map((img, i) => ({ label: `Gate Image ${i + 1}`, imgPath: img }))
  : defaultGate;

  defaultIncome = incomeImages.length > 0 
  ? incomeImages.map((img, i) => ({ label: `Income Image ${i + 1}`, imgPath: img }))
  : defaultIncome;

  useEffect(() => {
    defaultAadhar = aadharImages.length > 0 ? aadharImages.map((img, i) => ({ label: `Gate Image ${i + 1}`, imgPath: img })) : defaultAadhar ;
    console.log("Updated Aadhar Images:", aadharImages);
  }, [aadharImages]);
  // Auto change for all sliders every 5 seconds

  // Functions to handle manual button click for each slider
  const nextAadharImage = () => {
    setAadharIndex((prevIndex) => (prevIndex + 1) % defaultAadhar.length);
  };
  const prevAadharImage = () => {
    setAadharIndex((prevIndex) => (prevIndex - 1 + defaultAadhar.length) % defaultAadhar.length);
  };

  const nextIncomeImage = () => {
    setIncomeIndex((prevIndex) => (prevIndex + 1) % defaultIncome.length);
  };
  const prevIncomeImage = () => {
    setIncomeIndex((prevIndex) => (prevIndex - 1 + defaultIncome.length) % defaultIncome.length);
  };

  const nextGateImage = () => {
    setGateIndex((prevIndex) => (prevIndex + 1) % defaultGate.length);
  };
  const prevGateImage = () => {
    setGateIndex((prevIndex) => (prevIndex - 1 + defaultGate.length) % defaultGate.length);
  };

  const nextCommunityImage = () => {
    setCommunityIndex((prevIndex) => (prevIndex + 1) % defaultAadhar.length);
  };
  const prevCommunityImage = () => {
    setCommunityIndex((prevIndex) => (prevIndex - 1 + defaultAadhar.length) % defaultAadhar.length);
  };

  return (
    <div className="container">
      <button className="Back"><Link to={'/'}>Home</Link></button>
      <div className="form">
        <form className="registration-form">
        <div className="form-group">
            <label>Name:</label>
            <input type="text" name="name" required />
          </div>

          <div className="form-group">
            <label>Age:</label>
            <input type="number" name="age" required />
          </div>

          <div className="form-group">
            <label>Address:</label>
            <input type="text" name="address" required />
          </div>

          <div className="form-group">
            <label>Phone Number:</label>
            <input type="text" name="phone" required />
          </div>

          <div className="form-group">
            <label>Father's Name:</label>
            <input type="text" name="fatherName" required />
          </div>

          <div className="form-group">
            <label>Mother's Name:</label>
            <input type="text" name="motherName" required />
          </div>

          <div className="form-group">
            <label>State:</label>
            <input type="text" name="state" required />
          </div>

          <div className="form-group">
            <label>Blood Group:</label>
            <input type="text" name="bloodGroup" required />
          </div>

          <div className="form-group">
            <label>Aadhar Card Number:</label>
            <input type="text" name="aadharCard" required />
          </div>

          <div className="form-group">
            <label>Income:</label>
            <input type="text" name="income" required />
          </div>

          
          <div className="form-group">
            <label>Gate Score:</label>
            <input type="text" name="gateScoreCard" required />
          </div>

          <AadharExtraction setAadharImages={setAadharImages} setAadharText={setAadharText} />
          <IncomeExtraction setIncomeImages={setIncomeImages} setIncomeText={setIncomeText} />
          <GateExtraction setGateImages={setGateImages} setGateText={setGateText} />



          <div className="form-group">
            <label>Community Certificate Number:</label>
            <input type="text" name="aadharCard" required />
          </div>

          <div className="form-group">
            <label>Community certificate:</label>
            <input type="file" name="aadharCard" required />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="cont2">
        {/* Aadhar Slider */}
        <h4>Aadhar Details</h4>
        <div className="slider-container">
          <button className="prev-btn" onClick={prevAadharImage}>
            &#8592; {/* Left Arrow */}
          </button>
          <div className="image-display">
            <img src={defaultAadhar[aadharIndex].imgPath} alt={defaultAadhar[aadharIndex].label} />
            <p>{defaultAadhar[aadharIndex].label}</p>
          </div>
          <button className="next-btn" onClick={nextAadharImage}>
            &#8594; {/* Right Arrow */}
          </button>
        </div>

        {/* Income Slider */}
        <h4>Income Details</h4>
        <div className="slider-container">
          <button className="prev-btn" onClick={prevIncomeImage}>
            &#8592; {/* Left Arrow */}
          </button>
          <div className="image-display">
            <img src={defaultIncome[incomeIndex].imgPath} alt={defaultIncome[incomeIndex].label} />
            <p>{defaultIncome[incomeIndex].label}</p>
          </div>
          <button className="next-btn" onClick={nextIncomeImage}>
            &#8594; {/* Right Arrow */}
          </button>
        </div>

        {/* Gate Slider */}
        <h3>Gate Details</h3>
        <div className="slider-container">
          <button className="prev-btn" onClick={prevGateImage}>
            &#8592; {/* Left Arrow */}
          </button>
          <div className="image-display">
            <img src={defaultGate[gateIndex].imgPath} alt={defaultGate[gateIndex].label} />
            <p>{defaultGate[gateIndex].label}</p>
          </div>
          <button className="next-btn" onClick={nextGateImage}>
            &#8594; {/* Right Arrow */}
          </button>
        </div>

        {/* Community Slider */}
        <h4>Community Details</h4>
        <div className="slider-container">
          <button className="prev-btn" onClick={prevCommunityImage}>
            &#8592; {/* Left Arrow */}
          </button>
          <div className="image-display">
            <img src={defaultAadhar[communityIndex].imgPath} alt={defaultAadhar[communityIndex].label} />
            <p>{defaultAadhar[communityIndex].label}</p>
          </div>
          <button className="next-btn" onClick={nextCommunityImage}>
            &#8594; {/* Right Arrow */}
          </button>
        </div>
      </div>

      <div className="cont3">
        <textarea name="" className="area" value={aadharText}></textarea>
        <textarea name=""  className="area" value={incomeText}></textarea>
        <textarea name=""  className="area"value={gateText}></textarea>
        <textarea name=""  className="area"></textarea>
      </div>
    </div>
  );
}

export default Register;

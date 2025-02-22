import axios from 'axios';
const API_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:5000';


export const uploadAadhar1 = async (data) => {
    const response = await axios.post(`${API_URL}/aadhar`, data);
    return response.data;
};

export const uploadGate1 = async (data) => {
    const response = await axios.post(`${API_URL}/gate`, data);
    return response.data;
};

export const uploadGate = async (formData) => {
    try {
        console.log(formData)
        const response = await axios.post(`${API_URL}/api/gate`, formData, {
            headers: {
                'Access-Control-Allow-Origin' : 'http://127.0.0.1:5000/api/gate',
                'Content-Type': 'multipart/form-data'
            },
        });
        return response.data; // Return the response data from the server
    } catch (error) {
        throw error; // Rethrow the error to be handled in the component
    }
};

export const uploadIncome = async (formData) => {
    try {
        console.log(formData)
        const response = await axios.post(`${API_URL}/api/income`, formData, {
            headers: {
                'Access-Control-Allow-Origin' : 'http://127.0.0.1:5000/api/income',
                'Content-Type': 'multipart/form-data'
            },
        });
        console.log(response.data)
        return response.data; // Return the response data from the server
    } catch (error) {
        throw error; // Rethrow the error to be handled in the component
    }
};

export const uploadAadhar = async (formData) => {
    try {
        console.log(formData)
        const response = await axios.post(`${API_URL}/api/aadhar`, formData, {
            headers: {
                'Access-Control-Allow-Origin' : 'http://127.0.0.1:5000/api/aadhar',
                'Content-Type': 'multipart/form-data'
            },
        });
        console.log(response.data)
        return response.data; // Return the response data from the server
    } catch (error) {
        throw error; // Rethrow the error to be handled in the component
    }
};
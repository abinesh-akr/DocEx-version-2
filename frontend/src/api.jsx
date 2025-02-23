import axios from 'axios';
const API_URL = import.meta.env.VITE_API_URL || 'https://flask2-e36m.onrender.com';


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
                'Access-Control-Allow-Origin' : 'https://docex-version-2-3.onrender.com/api/gate',
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
                'Access-Control-Allow-Origin' : 'https://docex-version-2.onrender.com/api/income',
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
                'Access-Control-Allow-Origin' : 'https://flask2-e36m.onrender.com/api/aadhar',
                'Content-Type': 'multipart/form-data'
            },
        });
        console.log(response.data)
        return response.data; // Return the response data from the server
    } catch (error) {
        throw error; // Rethrow the error to be handled in the component
    }
};

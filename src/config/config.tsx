import axios from "axios";

const API = axios.create({
    baseURL: "Url base",
});

export const propertyRegister = async (requestBody: any) => {
    try {
        const response = await API.post('/rota', requestBody);
        return response.data; 
    } catch (error) {
        console.error("Error:", error); 
        throw error;
    }
};
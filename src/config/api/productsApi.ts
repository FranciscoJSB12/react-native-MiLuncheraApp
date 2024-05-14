import axios from 'axios';

export const productsApi = axios.create({
    baseURL: 'https://ecommerce-backend-puce.vercel.app/api',
    headers: {
        'Content-Type': 'application/json',
    }
});
// Triển khai axios theo dạng component

import axios from 'axios';

const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

// custom method để tránh phải truyh cập dạng res.data.data

export const get = async (path, options = {}) => {
    const respone = await request.get(path, options);
    return respone.data;
};

export default request;

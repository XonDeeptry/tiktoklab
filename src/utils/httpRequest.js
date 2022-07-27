// Triển khai axios theo dạng component

import axios from 'axios';

// Enviroment trả về một object với cú pháp: process.env.<key>

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

// custom method để tránh phải truyh cập dạng res.data.data

// Tạo method nhận vào path và options  và gắn path sau đó trả về giá trị.
export const get = async (path, options = {}) => {
    const respone = await httpRequest.get(path, options);
    // Truy cập và gọi trực tiếp key data của object axios sẽ giúp phần call không cần truy cập 2 lần key data của axios và key data của API nữa.
    return respone.data;
};

export default httpRequest;

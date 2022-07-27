// Tách phần async gọi API ra thành component

import * as httpRequest from '~/utils/httpRequest';

export const search = async (q, type = 'less') => {
    // Nạp thêm param vào axios.
    try {
        const res = await httpRequest.get('users/search', {
            // chú ý các argument của async cần  cần match với API provider
            params: {
                q,
                type,
            },
        });
        // Trả về dữ là key: data của API. Đầu ra có thể gắn trực tiếp một variable vào dữ liệu trả về thay vì phải gọi variable.data
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

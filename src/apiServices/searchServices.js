// Tách phần async gọi API ra thành component

import * as request from '~/utils/request';

export const search = async (q, type = 'less') => {
    try {
        const res = await request.get('users/search', {
            // chú ý các argument ở đây cần match với API hosting
            params: {
                q,
                type,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

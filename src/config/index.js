import routes from './routes';
import connect from './db';

// Biến các biến cấu hình trở thành object trong một object import và truy cập dễ dàng hơn.
const config = {
    routes,
    connect,
};

export default config;

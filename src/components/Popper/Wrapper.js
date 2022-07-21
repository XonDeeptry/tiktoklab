import classNames from 'classnames/bind';
import styles from './Popper.module.scss';

const cx = classNames.bind(styles);

// Việc khởi tạo wrapper tại đây nhằm mục tiêu chính có thể tái sử dụng cho các module khác như actions
function Wrapper({ children }) {
    return <div className={cx('wrapper')}>{children}</div>;
}

export default Wrapper;

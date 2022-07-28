// Logic library import
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

// Layout library import

// Layout import
import styles from './Popper.module.scss';

// Component import

const cx = classNames.bind(styles);

// Việc khởi tạo wrapper tại đây nhằm mục tiêu chính có thể tái sử dụng cho các module khác như actions
function Wrapper({ children, className }) {
    return <div className={cx('popperwrapper', className)}>{children}</div>;
}

Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default Wrapper;

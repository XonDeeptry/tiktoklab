import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ title, to, icon }) {
    return (
        // NavLink mặc định sẽ tự động đối chiếu thành phần con của nó với current site link để thêm trạng thái active. Tuy nhiên sử dụng cx dưới dạng mã hóa active được thêm vào không phải là dạng mã hóa dẫn tới không thể CSS cho class này được.
        // Tuy nhiên navLink hỗ trợ truyền vào một function. Navlnik sẽ trả về một object có key là isActive. Khi thành phần thứ 2 của className = true nó sẽ thêm value của key đó vào.
        <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={to}>
            {icon}
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
};

export default MenuItem;

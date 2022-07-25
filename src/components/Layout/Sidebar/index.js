// Logic library import

// Layout library import
import classNames from 'classnames/bind';

// Layout import
import styles from './Sidebar.module.scss';

// Component import

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <h2>Sidebar</h2>
        </aside>
    );
}

export default Sidebar;

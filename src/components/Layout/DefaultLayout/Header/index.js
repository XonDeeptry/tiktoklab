import classNames from 'classnames/bind';
import styles from './Header.module.scss';

// bind styles hỗ trợ viết classname dưới dạng dấu -
const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}
                {/* Search */}
            </div>
        </header>
    );
}

export default Header;

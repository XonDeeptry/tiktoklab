// Logic library import
import classNames from 'classnames/bind';

// Layout library import

// Layout import
import styles from './DefaultLayout.module.scss';

// Component import
import Header from '~/components/Layout/Header';
import Sidebar from '~/components/Layout/Sidebar';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;

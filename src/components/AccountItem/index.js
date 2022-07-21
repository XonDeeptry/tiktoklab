import classNames from 'classnames/bind';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountItem.module.scss';
const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img src="" alt="Picture Hoaa" />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Username</span>
                    <FontAwesomeIcon icon={faCheckCircle} />
                </p>
                <span className={cx('username')}>Bùi văn X</span>
            </div>
        </div>
    );
}

export default AccountItem;

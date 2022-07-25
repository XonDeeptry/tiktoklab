// Logic library import
import classNames from 'classnames/bind';

// Layout library import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

// Layout import
import styles from './AccountItem.module.scss';

// Component import
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image className={cx('avatar')} src="" alt="Default Avatar" />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Xơn deeptry</span>
                    <FontAwesomeIcon icon={faCircleCheck} className={cx('check')} />
                </p>
                <span className={cx('username')}>Account informations</span>
            </div>
        </div>
    );
}

export default AccountItem;

// Logic library import
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

// Layout library import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

// Layout import
import styles from './AccountItem.module.scss';

// Component import
import Image from '~/components/Image';

const cx = classNames.bind(styles);

// Nhận dữ liệu được truyền vào từ API
function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon icon={faCircleCheck} className={cx('check')} />}
                </p>
                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </Link>
    );
}

export default AccountItem;

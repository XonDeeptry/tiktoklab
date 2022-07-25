// Logic library import
import classNames from 'classnames/bind';

// Layout library import

// Layout import
import styles from './Menu.module.scss';

// Component import
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const classes = cx('menu-item', {
        // Nếu có separate bổ sung thêm .separate vào classname
        separate: data.separate,
    });
    return (
        <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItem;

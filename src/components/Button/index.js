// Logic library import
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

// Layout library import

// Layout import
import styles from './Button.module.scss';

// Component import

const cx = classNames.bind(styles);

function Button({
    to,
    href,

    primary = false,
    outline = false,
    text = false,
    rounded = false,

    small = false,
    large = false,

    disabled = false,

    onClick,

    children,
    className,
    leftIcon,
    rightIcon,

    ...passProps
}) {
    let Comp = 'button';
    const _props = {
        onClick,
        ...passProps,
    };

    // logic handlers when button on disabled state
    if (disabled) {
        // Cách 1 disable 1 tính năng cụ thể
        // delete _props.onClick;
        // Cách 2 disable tất cả các tính năng bắt đầu với từ on
        // Loop qua object props với keys fucntion
        Object.keys(_props).forEach((key) => {
            // Nếu key start bằng từ on và type của key là một hàm sẽ xóa
            if (key.startsWith('on') && typeof _props[key] === 'function') {
                delete _props[key];
            }
        });
    }

    if (to) {
        _props.to = to;
        Comp = Link;
    } else if (href) {
        _props.href = href;
        Comp = 'a';
    }
    // Khi primary được truyền vào function nó sẽ add class primary vào classes
    const classes = cx('wrapper', {
        // tạo custom login bằng object handle
        // Lấy chính classname làm key. Khi người dùng truyền vào sẽ thu được className của comp là chính className truyền vào và có thể custom ngay tại nơi gọi Component này.
        [className]: className,

        primary,
        outline,
        rounded,
        text,

        disabled,

        small,
        large,
    });

    return (
        <Comp className={classes} {..._props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;

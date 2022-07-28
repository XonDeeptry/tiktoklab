// Logic library import
import { useState } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

// Layout library import
import Tippy from '@tippyjs/react/headless';

// Layout import
import styles from './Menu.module.scss';

// Component import
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';

const cx = classNames.bind(styles);

const defaultFn = () => {};
// tạo một function trống để khi không nhận được truyền từ bên ngoài vào vẫn không khiến onchange là undefined dẫn tới lỗi.
function Menu({ children, items = [], hideOnClick = true, onChange = defaultFn }) {
    /**Nguyên tắc hoạt động của menu nhiều lớp.
     * Tại giao diện đầu tiên mảng chỉ có 1 phần tử render phần tử đó.
     * Nếu phần tử có children key thì onClick được kích hoạt
     *
     * Khi khởi tạo lần đầu history là một mảng chứa 1 object có một keys key đó có giá trị chính bằng items là một array được truyền vào.
     * Ta có currentMenu chính là hisotry có indexes cuối cùng của mảng
     * Tại function map:
     *  Kiểm tra các thành phần con bên trong history có chứa children hay không.
     *  Chắc chắn trả lại Menu tuy nhiên với Menu có các thành phần con bên trong thực hiện setHistory bằng cách bảo lưu dữ liệu hiện có và bổ sung children của item đó.
     *  setHistory được goi dẫn tới history lúc này sẽ được nạp vào key children của phần tử thuộc mảng. trong vòng này current sẽ được set bằng phần tử thứ 2 của mảng (children đang được ghi vào phần tử thứ 2)
     *  data ở đây chính là bằng children của mảng items. tiếp tục map và render ra bởi Buttron
     * Chú ý việc đặt key ở đây. Do history ban đầu được đặt key là data. nên nó có thể query được với dữ liệu của nó. Tuy nhiên khi thay đổi key này nó sẽ không match đc dữ liệu nó được nhận vào dẫn tới lỗi. (dữ liệu được truyền vào từ mảng của header cũng cần có key là data.)
     */
    const [history, setHistory] = useState([{ data: items }]);
    // Lấy phần tử cuối cùng của mảng
    const currentMenu = history[history.length - 1];

    const renderItems = () => {
        return currentMenu.data.map((item, index) => {
            // Có children true, không children undefined
            const isParrent = !!item.children;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParrent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            // Nếu không phải parrent trả ra chính item đó
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    return (
        <Tippy
            delay={[100, 500]}
            interactive={true}
            placement="bottom-end"
            hideOnClick={hideOnClick}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {/* Nếu history.length > 1 thì đang không ở trang 1
                        Curent luôn lấy phần tử cuối do đó để trở lại trang 1 chỉ cần xóa bỏ phần tử cuối đi mà thôi */}
                        {history.length > 1 && (
                            <Header
                                title={currentMenu.title}
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, prev.length - 1));
                                }}
                            />
                        )}
                        <div className={cx('menu-body')}>{renderItems()}</div>
                    </PopperWrapper>
                </div>
            )}
            // Khi không sử dụng menu nữa tự động reset về phần tử đầu tiên
            onHide={() => setHistory((prev) => prev.slice(0, 1))}>
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};

export default Menu;

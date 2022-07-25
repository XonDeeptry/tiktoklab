// Logic library import
import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';

// Layout library import
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

// Layout import
import styles from './Search.module.scss';

// Component import
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Search() {
    // Đặt state để xử lý two way binding
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);

    const inputRef = useRef();

    // Fake API for array
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 0);
    });

    const handleClear = () => {
        setSearchValue('');
        // Focus khi clear dữ liệu
        inputRef.current.focus();
    };

    // Khi không focus set showResult = false => Dù dữ liệu search vẫn có vẫn ẩn đi khi không focus.
    // Khi thực thi tới đây chúng chưa tự động hiển thị ra khi focus lại ô input. Cần bổ sung thêm vào input.
    const handleHideRessult = () => {
        setShowResult(false);
    };

    return (
        <HeadlessTippy
            interactive={true}
            // Hiển thi thị searchResult len > 0, khi input được focus
            visible={showResult && searchResult.length > 0}
            // method của tippy khi không được focus
            onClickOutside={handleHideRessult}
            // Giao diện của dropdown
            render={(attrs) => (
                <div className={cx('search-results')} tabIndex="-1" {...attrs}>
                    {/* Import Wrapper của Popper và tùy chỉnh tại css của Header theo nhu cầu */}
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                    </PopperWrapper>
                </div>
            )}>
            <div className={cx('search')}>
                <input
                    // Lấy ref của input để có thể thực thi focus khi xóa dữ liệu
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search accounts and Videos"
                    spellCheck="false"
                    onChange={(e) => setSearchValue(e.target.value)}
                    // Khi focus lại show Popper search
                    onFocus={() => setShowResult(true)}
                />
                {/* Converrt searchValue to boolean đặt điều khiện khi có vaue mới hiển thị button xóa */}
                {!!searchValue && (
                    // Lắng nghe sự kiện onClick và setSearchValue trở thành chuỗi rỗng thông qua method handleClear
                    <button className={cx('clear-btn')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {/* <FontAwesomeIcon icon={faSpinner} className={cx('loading')} /> */}

                <button className={cx('searcth-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;

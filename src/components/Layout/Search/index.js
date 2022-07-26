// Logic library import
import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';

// Logic import
import { useDebounce } from '~/hooks';

// Layout library import
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';

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
    const [loading, setLoading] = useState(false);

    // Truyền giá trị searchValue và thời gian chờ vào custom hook. Sau đó thay thế trong useEffect và call API
    const debounce = useDebounce(searchValue, 500);

    const inputRef = useRef();

    // Call API from server
    useEffect(() => {
        // API được set giá trị bắt buộc phải có ở query. Tuy nhiên giá trị mặc định của searchValue là chuỗi rỗng dẫn tới lỗi.
        // Kiểm tra nếu searchValue không có return luôn không gọi API. Khi nào searchValue có giá trị thì mới tiến hành gọi API
        // Ở back end thường chuỗi rỗng như space sẽ bị trim => xảy ra lỗi do truyền chuỗi rỗng. Thực hiện gọi hàm trim để cắt chuỗi rỗng
        if (!debounce.trim()) {
            // Khi không có dữ liệu thì searchResult (mảng chứa các thành phần search) bằng mảng rỗng
            setSearchResult([]);
            return;
        }

        setLoading(true);

        // khi truyền vào ký tự đặc biệt sẽ dẫn tới một số lỗi. liên quan tới logic và qui ước. CÓ thể thực hiện việc mã hóa để xử lý lỗi này. nó sẽ mã hóa các ký tự đặc biệt thành ký tự hợp lệ trên URL
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounce)}&type=less`)
            .then((res) => res.json())
            .then((res) => {
                setSearchResult(res.data);
                setLoading(false);
            });
        // Neues searchValue thay đổi render lại
    }, [debounce]);

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
                        {/* Render ra giao diện search */}
                        {searchResult.map((result) => (
                            <AccountItem key={result.id} data={result} />
                        ))}
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
                {!!searchValue && !loading && (
                    // Lắng nghe sự kiện onClick và setSearchValue trở thành chuỗi rỗng thông qua method handleClear
                    <button className={cx('clear-btn')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {loading && <FontAwesomeIcon icon={faSpinner} className={cx('loading')} />}

                <button className={cx('searcth-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;

import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faRightToBracket,
    faEllipsisVertical,
    faEarth,
    faCircleQuestion,
    faKeyboard,
} from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import images from '~/assests/images';
import { Wrapper as PopperWrapper, Menu } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';

// bind styles hỗ trợ viết classname dưới dạng dấu -
const cx = classNames.bind(styles);

const MENU_ITEM = [
    // Mất cứ menu nào có children sẽ được coi là có submenu
    {
        icon: <FontAwesomeIcon icon={faEarth} />,
        title: 'Tiếng Việt',
        children: {
            title: 'Language',
            data: [
                { code: 'en', title: 'English', type: 'language' },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                    type: 'language',
                    children: {
                        title: 'Language',
                        data: [
                            { code: 'en', title: 'English 1' },
                            {
                                code: 'vi',
                                title: 'Tiếng Việt 1',
                                type: 'language',
                                children: {
                                    title: 'Language',
                                    data: [
                                        { code: 'en', title: 'English 2', type: 'language' },
                                        { code: 'vi', title: 'Tiếng Việt 2', type: 'language' },
                                    ],
                                },
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedbacks',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    // Tạo state
    const [searchResult, setSearchResult] = useState([]);
    // Fake API for array
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 0);
    });

    // handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // handle change language
                break;
            default:
                console.log(menuItem);
        }
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>
                <Tippy
                    interactive={true}
                    // Hiển thi thị searchResult len > 0
                    // visible={searchResult.length > 0}
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
                        <input placeholder="Search accounts and Videos" spellCheck="false" />
                        <button className={cx('clear-btn')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('searcth-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('actions')}>
                    <Button text>Upload</Button>
                    <Button primary leftIcon={<FontAwesomeIcon icon={faRightToBracket} />}>
                        Login
                    </Button>
                    <Menu items={MENU_ITEM} onChange={handleMenuChange}>
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;

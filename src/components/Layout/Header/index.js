// Logic library import
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';

// Layout library import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faRightToBracket,
    faEllipsisVertical,
    faEarth,
    faCircleQuestion,
    faKeyboard,
    faUser,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';

// Layout import
import styles from './Header.module.scss';
import 'tippy.js/dist/tippy.css';

// Component import
import images from '~/assets/images';
import { Menu } from '~/components/Popper';
import Button from '~/components/Button';
import { UploadIcon, MessagesIcon, InboxIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';

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

const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/@yourprofile',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get Coins',
        to: '/coins',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/settings',
    },
    ...MENU_ITEM,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log Out',
        to: '/logout',
        // Sett thêm thuộc tính vào nút logout
        separate: true,
    },
];

function Header() {
    // Tạo state đã chuyển sang component search tránh việc phải re-render cả component không liên quan

    const currentUser = true;

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

                {/* Search Component đã tách ra components riêng và được import vào */}
                <Search />

                {/* Action pannel */}
                <div className={cx('actions')}>
                    {/* Nếu current user true = logged in then render information pannel, if false then render loggin pannel */}
                    {currentUser ? (
                        <>
                            <Tippy content="Upload video" placement="bottom" delay={[0, 200]}>
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Messages" placement="bottom" delay={[0, 200]}>
                                <button className={cx('action-btn')}>
                                    <MessagesIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Inbox" placement="bottom" delay={[0, 200]}>
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary leftIcon={<FontAwesomeIcon icon={faRightToBracket} />}>
                                Login
                            </Button>
                        </>
                    )}
                    {/* Nếu có current user dùng userMenu nếu không dùng Menu Item */}
                    <Menu items={currentUser ? userMenu : MENU_ITEM} onChange={handleMenuChange}>
                        {currentUser ? (
                            // Khi chưa sử dụng ref element này sẽ lỗi do Tippy cần có được ref của các thành phần bên trong DOM của các thành viên bên trong. Đảm bảo việc hiển thị tooltip chính xác.
                            //Tippy sẽ xác định tọa độ của các child components để render ra giao diện.
                            <Image
                                className={cx('user-avatar')}
                                alt="Nguyễn văn A"
                                src="https://-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/557695794d1cb0b4a32322da33aac45d~c5_100x100.jpeg?x-expires=1658538000&amp;x-signature=OtYkAIcl8b4OXb3kZkWkWNch82M%3D"
                                // Truyền fallback vào
                                fallback="https://static.fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;

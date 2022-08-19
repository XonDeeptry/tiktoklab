// Logic library import

// Layout library import
import classNames from 'classnames/bind';

// Layout import
import styles from './Sidebar.module.scss';

// Component import
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import { HomeIcon, UserGroupIcon, LIVEIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.root} icon={<HomeIcon />} />
                <MenuItem title="Following" to={config.routes.following} icon={<UserGroupIcon />} />
                <MenuItem title="Go LIVE" to={config.routes.live} icon={<LIVEIcon />} />
            </Menu>
        </aside>
    );
}

export default Sidebar;

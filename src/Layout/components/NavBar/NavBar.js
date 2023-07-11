import classNames from 'classnames/bind';
import styles from './NavBar.module.scss';

import { NavLink } from 'react-router-dom';

// , AiFillHome,BiSolidSearch,
import { AiOutlineArrowRight, AiOutlineHome, AiOutlinePlus } from 'react-icons/ai';
import { BiSearch, BiSolidPlaylist } from 'react-icons/bi';

import config from '~/Config';
import Library from '~/components/Library';
import Tippy from '@tippyjs/react';

const cx = classNames.bind(styles);
function NavBar() {
    const navList = [
        {
            title: 'Home',
            icon: <AiOutlineHome />,
            to: config.routes.home,
        },
        {
            title: 'Search',
            icon: <BiSearch />,
            to: config.routes.search,
        },
    ];

    return (
        <div className={cx('nav')}>
            {/* Nav Home */}
            <div className={cx('nav-list')}>
                {navList.map((navItem, index) => (
                    <li key={index} className={cx('nav-item')}>
                        <NavLink to={navItem.to} className={(nav) => cx('nav-link', { active: nav.isActive })}>
                            <span className={cx('icon')}>{navItem.icon}</span>
                            <span>{navItem.title}</span>
                        </NavLink>
                    </li>
                ))}
            </div>

            {/* Nav playlist */}
            <div className={cx('nav-list', 'nav-playlist')}>
                <li className={cx('nav-item', 'mb-16')}>
                    <div className={cx('nav-link')}>
                        <Tippy content="Collapse Your Library">
                            <span>
                                <BiSolidPlaylist className={cx('icon')} />
                                <span>Your Library</span>
                            </span>
                        </Tippy>
                    </div>
                    <Tippy content="Create playlist or folder">
                        <span className={cx('create-playlist')}>
                            <AiOutlinePlus className={cx('icon')} />
                        </span>
                    </Tippy>
                    <Tippy content="Enlarge Your Library">
                        <span className={cx('create-playlist')}>
                            <AiOutlineArrowRight className={cx('icon')} />
                        </span>
                    </Tippy>
                </li>
                <Library user />
            </div>
        </div>
    );
}

export default NavBar;

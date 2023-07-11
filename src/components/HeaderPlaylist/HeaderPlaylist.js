import images from '~/asset/imgs';
import { BiLogoSpotify } from 'react-icons/bi';
import classNames from 'classnames/bind';
import styles from './HeaderPlaylist.module.scss';

import { AiFillPlayCircle, AiFillPauseCircle, AiOutlineMore, AiOutlineHeart } from 'react-icons/ai';
import Tippy from '@tippyjs/react';

const cx = classNames.bind(styles);

function HeaderPlaylist() {
    return (
        <>
            <div className={cx('header')}>
                <img src={images.demo} alt="demo" className={cx('img')} />
                <div className={cx('info')}>
                    <p className={cx('type')}>Playlist</p>
                    <h2 className={cx('heading')}>Nam pro mix</h2>

                    <div className={cx('desc')}>
                        <span className={cx('logo')}>
                            <BiLogoSpotify className={cx('logo-icon')} />
                            <a href="/">Spotify</a>
                        </span>
                        <span className={cx('quantity')}>50 songs,</span>
                        <span className={cx('about')}>about 3 hr 30 min</span>
                    </div>
                </div>
            </div>
            <div className={cx('nav')}>
                <span>
                    <AiFillPlayCircle className={cx('icon', 'play-icon')} />
                </span>
                <Tippy content="Save to Your Library">
                    <span>
                        <AiOutlineHeart className={cx('icon')} />
                    </span>
                </Tippy>
                <Tippy content="More options for Nam Pro">
                    <span>
                        <AiOutlineMore className={cx('icon')} />
                    </span>
                </Tippy>
            </div>
        </>
    );
}

export default HeaderPlaylist;

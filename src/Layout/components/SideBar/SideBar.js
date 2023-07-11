import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';
import Button from '~/components/Button/Button';

import { RiArrowLeftSLine, RiUserLine, RiArrowRightSLine } from 'react-icons/ri';
import { GrInstallOption } from 'react-icons/gr';
import { LiaDownloadSolid } from 'react-icons/lia';

const cx = classNames.bind(styles);

function SideBar({ account }) {
    return (
        <aside className={cx('sidebar')}>
            <div className={cx('top-bar')}>
                <RiArrowLeftSLine className={cx('icon')} />
                <RiArrowRightSLine className={cx('icon')} />
            </div>
            {!account ? (
                <>
                    <div className={cx('btn')}>
                        <Button text large title={'Sign up'} />
                        <Button large title={'Log in'} />
                    </div>
                </>
            ) : (
                <>
                    <div className={cx('btn')}>
                        <Button title={'Explore Premium'} />
                        <Button dark icon={<LiaDownloadSolid />} title={'Install App'} />
                        <RiUserLine className={cx('user-icon', 'icon')} />
                    </div>
                </>
            )}
        </aside>
    );
}

export default SideBar;

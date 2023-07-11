import SideBar from '../SideBar';

import classNames from 'classnames/bind';
import styles from './Content.module.scss';

const cx = classNames.bind(styles);

function Content({ children }) {
    return (
        <main className={cx('content')}>
            <SideBar account />
            {children}
        </main>
    );
}

export default Content;

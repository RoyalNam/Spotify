import Content from '../components/Content';

import classNames from 'classnames/bind';
import styles from './MainLayout.module.scss';
import NavBar from '../components/NavBar/NavBar';

const cx = classNames.bind(styles);

function MainLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <NavBar />
            <Content children={children} />
        </div>
    );
}

export default MainLayout;

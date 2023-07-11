import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import Button from '../Button/Button';
import { MdLanguage } from 'react-icons/md';

const cx = classNames.bind(styles);
function Footer() {
    return (
        <footer className={cx('footer')}>
            <a href="/" className={cx('footer-link')}>
                Legal
            </a>
            <a href="/" className={cx('footer-link')}>
                Privacy Center
            </a>
            <a href="/" className={cx('footer-link')}>
                Cookies
            </a>
            <a href="/" className={cx('footer-link')}>
                Privacy Center
            </a>

            <a href="/" className={cx('footer-link')}>
                Accessibility
            </a>
            <a href="/" className={cx('footer-link')}>
                Cookies
            </a>
            <Button outline className={cx('btn')} icon={<MdLanguage />} title={'English'} />
        </footer>
    );
}

export default Footer;

import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import Button from '../Button/Button';

const cx = classNames.bind(styles);

function Cart({ heading, desc, title }) {
    return (
        <div className={cx('cart')}>
            <h4 className={cx('cart-tit')}>{heading}</h4>
            <p className={cx('cart-desc')}>{desc}</p>
            <Button title={title} />
        </div>
    );
}

export default Cart;

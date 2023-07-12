import classNames from 'classnames/bind';
import styles from './Library.module.scss';

import Cart from '~/components/Cart/Cart';
import Footer from '~/components/Footer/Footer';
import images from '~/asset/imgs';

import { AiOutlineHome, AiOutlinePlus } from 'react-icons/ai';
import { BiSearch, BiSolidPlaylist } from 'react-icons/bi';

const cx = classNames.bind(styles);

function Library({ user, small, url, title, author }) {
    const CART_wrapper = [
        { heading: 'Create your first playlist', desc: "It's easy, we'll help you", title: 'Create playlist' },
        {
            heading: "Let's find some podcasts to follow",
            desc: "We'll keep you update on new episodes",
            title: 'Browse podcasts',
        },
    ];
    return (
        <>
            {user ? (
                <div className={cx('playlist-wrapper', { small })}>
                    <img className={cx('playlist-img')} src={url} alt={title} />
                    <div className={cx('playlist-info')}>
                        <h4>{title}</h4>
                        <div className={cx('playlist-desc')}>
                            <span>{author}</span>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    {CART_wrapper.map((cart, index) => (
                        <Cart key={index} heading={cart.heading} desc={cart.desc} title={cart.title} />
                    ))}
                    <Footer />
                </>
            )}
        </>
    );
}

export default Library;

import classNames from 'classnames/bind';
import styles from './PlaylistCart.module.scss';
import React, { useEffect, useState } from 'react';
import { BsFillPlayFill } from 'react-icons/bs';

import Button from '../Button/Button';

import getAccessToken from '~/utils/accessToken ';
import { getPlayLists } from '~/utils/getData';
import { Link } from 'react-router-dom';
import config from '~/Config';

const cx = classNames.bind(styles);

function PlaylistCart() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const accessToken = await getAccessToken();
                const categoryList = await getPlayLists(accessToken);
                setCategories(categoryList);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);
    console.log(categories);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('heading')}>
                <a className={cx('heading-link')} href="/">
                    Playlist
                </a>
                <Button href={'/'} title={'Show all'} text />
            </div>
            <div className={cx('cart-list')}>
                {categories.map((category) => (
                    <Link to={config.routes.playlist} key={category.id} className={cx('cart-item')}>
                        <div className={cx('img-block')}>
                            <img src={category.icons[0].url} alt={category.name} className={cx('img')} />
                            <BsFillPlayFill className={cx('btn-play')} />
                        </div>
                        <h4 className={cx('title')}>{category.name}</h4>
                        <Link className={cx('desc')} to={`/playlist/${category.id}`}>
                            {category.name}
                        </Link>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default PlaylistCart;

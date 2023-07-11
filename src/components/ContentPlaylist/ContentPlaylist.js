import classNames from 'classnames/bind';
import styles from './ContentPlaylist.module.scss';
import Library from '../Library/Library';

const cx = classNames.bind(styles);

function ContentPlaylist({ children }) {
    return (
        <main className={cx('content')}>
            <table className={cx('list-song')}>
                <tr className={cx('title')}>
                    <th>#</th>
                    <th>Title</th>
                    <th>Album</th>
                    <th>time</th>
                </tr>
                <tr className={cx('song-item')}>
                    <th>1</th>
                    <th className={cx('mt-32')}>
                        <Library small user />
                    </th>
                    <th>Playlist test</th>
                    <th>3:23</th>
                </tr>
            </table>
        </main>
    );
}

export default ContentPlaylist;

import { useState } from 'react';
import Library from '../Library/Library';
import { AiOutlineClockCircle } from 'react-icons/ai';
import songList from '~/data/songs.json';

import classNames from 'classnames/bind';
import styles from './ContentPlaylist.module.scss';
import AudioPlayer from '../AudioPlayer/AudioPlayer';
const cx = classNames.bind(styles);

function ContentPlaylist({ children }) {
    const [songPlay, setSongPlay] = useState('');

    // console.log(songs);
    // console.log(songPlay);

    const handleSongClick = (url) => {
        setSongPlay(url);
        console.log(url);
    };

    return (
        <main className={cx('content')}>
            <table className={cx('list-song')}>
                <thead className={cx('title')}>
                    <th>#</th>
                    <th>Title</th>
                    <th>Album</th>
                    <th>
                        <AiOutlineClockCircle className={cx('time-icon')} />
                    </th>
                </thead>
                {songList.map(
                    (song, index) =>
                        index < 24 && (
                            <tr className={cx('song-item')} key={index} onClick={() => handleSongClick(song.id)}>
                                <td>{index + 1}</td>
                                <td>
                                    <Library
                                        url={song.links.images[0].url}
                                        title={song.name}
                                        author={song.author}
                                        small
                                        user
                                    />
                                </td>
                                <td>{song.name}</td>

                                <td>3:23</td>
                            </tr>
                        ),
                )}
            </table>
            <div>
                <AudioPlayer id={songPlay} />
            </div>
        </main>
    );
}
{
    /* <AudioPlayer className={cx('song-content')} src={songPlay} autoPlay controls /> */
}

export default ContentPlaylist;

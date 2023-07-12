import React, { useState } from 'react';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import classNames from 'classnames/bind';
import styles from './AudioPlayer.module.scss';
import Library from '../Library/Library';

import songList from '~/data/songs.json';
const cx = classNames.bind(styles);
function AudioPlay({ id }) {
    const [songId, setSong] = useState(Number(id));

    const songI = songList.find((song) => song.id === songId);
    const handleNextSong = () => {
        setSong(songId + 1);
        console.log(songId);
    };
    return (
        <div className={cx('container')}>
            {songList.map((song, index) =>
                songId
                    ? song.id === songId
                    : song.id === id && (
                          <>
                              <div className={cx('info')}>
                                  <Library url={song.links.images[0].url} title={song.name} author={song.author} user />
                              </div>
                              <div className={cx('playing')}>
                                  <AudioPlayer
                                      src={song.url}
                                      className={cx('play')}
                                      layout="stacked-reverse"
                                      autoPlays
                                      showJumpControls={false}
                                      showSkipControls={true}
                                      onClickNext={handleNextSong}
                                  />
                              </div>
                          </>
                      ),
            )}
        </div>
    );
}

export default AudioPlay;

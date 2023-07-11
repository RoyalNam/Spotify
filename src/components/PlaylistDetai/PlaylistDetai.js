import { useState, useEffect } from 'react';
function PlaylistDetail({ match }) {
    const [playlist, setPlaylist] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const accessToken = await getAccessToken();
                const playlistDetail = await getPlaylistDetail(accessToken, match.params.playlistId);
                setPlaylist(playlistDetail);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, [match.params.playlistId]);

    return (
        <div>
            {playlist ? (
                <div>
                    <h1>{playlist.name}</h1>
                    <p>{playlist.description}</p>
                    <img src={playlist.image} alt={playlist.name} />
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

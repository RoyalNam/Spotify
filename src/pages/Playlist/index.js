import { useState, useEffect } from 'react';
import MainLayout from '~/Layout/MainLayout/MainLayout';
import ContentPlaylist from '~/components/ContentPlaylist/ContentPlaylist';
import HeaderPlaylist from '~/components/HeaderPlaylist/HeaderPlaylist';
import getAccessToken from '~/utils/accessToken ';
import getCategoryList from '~/utils/category';

function Playlist() {
    return (
        <MainLayout
            children={
                <>
                    <HeaderPlaylist />
                    <ContentPlaylist />
                </>
            }
        />
    );
}

export default Playlist;

// function Playlist({ match }) {
//     const [playlist, setPlaylist] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const accessToken = await getAccessToken();
//                 const playlistDetail = await getCategoryList(accessToken, match.params.playlistId);
//                 setPlaylist(playlistDetail);
//             } catch (error) {
//                 console.error('Error:', error);
//             }
//         };

//         fetchData();
//     }, [match.params.playlistId]);

//     return (
//         <div>
//             {playlist ? (
//                 <div>
//                     <h1>{playlist.name}</h1>
//                     <p>{playlist.description}</p>
//                     <img src={playlist.image} alt={playlist.name} />
//                 </div>
//             ) : (
//                 <p>Loading...</p>
//             )}
//         </div>
//     );
// }

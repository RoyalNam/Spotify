import axios from 'axios';
const url = 'https://api.spotify.com/v1/browse/categories';
const getPlayLists = async (accessToken) => {
    try {
        const response = await axios.get(`${url}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return response.data.categories.items;
    } catch (error) {
        console.error('Error getting category list:', error);
        throw error;
    }
};
const getPSongs = async (accessToken, genreId) => {
    try {
        const response = await axios.get(`${url}/${genreId}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return response.data.categories.items;
    } catch (error) {
        console.error('Error getting category list:', error);
        throw error;
    }
};

export { getPlayLists, getPSongs };

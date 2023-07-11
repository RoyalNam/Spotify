import axios from 'axios';

const getCategoryList = async (accessToken) => {
    try {
        const response = await axios.get('https://api.spotify.com/v1/browse/categories', {
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

export default getCategoryList;

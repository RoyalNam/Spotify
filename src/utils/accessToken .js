import axios from 'axios';

const clientId = 'd576c39fd9e34c6f8fb071fe39c438e6';
const clientSecret = '803c33ebdbcb4ac1b5ebfdd4031bf575';
// clientId, clientSecret
const getAccessToken = async () => {
    try {
        const response = await axios.post('https://accounts.spotify.com/api/token', 'grant_type=client_credentials', {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
            },
        });
        return response.data.access_token;
    } catch (error) {
        console.error('Error getting access token:', error);
        throw error;
    }
};

export default getAccessToken;

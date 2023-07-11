const axios = require('axios');
const clientId = 'd576c39fd9e34c6f8fb071fe39c438e6';
const clientSecret = '8925874f7ea14c148865ae8b0c923160';

// Lấy access token từ Spotify API
axios
    .post('https://accounts.spotify.com/api/token', 'grant_type=client_credentials', {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: 'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64'),
        },
    })
    .then((response) => {
        const accessToken = response.data.access_token;

        // Lấy danh sách các playlist từ Spotify API
        axios
            .get('https://api.spotify.com/v1/me/playlists', {
                headers: {
                    Authorization: 'Bearer ' + accessToken,
                },
            })
            .then((response) => {
                const playlists = response.data.items;
                console.log(playlists);
            })
            .catch((error) => {
                console.error(error);
            });
    })
    .catch((error) => {
        console.error(error);
    });

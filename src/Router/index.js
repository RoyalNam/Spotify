import config from '~/Config';
import Episode from '~/pages/Episode';
import Home from '~/pages/Home';
import Playlist from '~/pages/Playlist';
import Search from '~/pages/Search';

const publicRouters = [
    { path: config.routes.home, component: Home },
    { path: config.routes.search, component: Search },
    { path: config.routes.playlist, component: Playlist },
    { path: config.routes.episode, component: Episode },
];
const privateRouters = [];

export { publicRouters, privateRouters };

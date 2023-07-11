import MainLayout from '~/Layout/MainLayout';
import PlaylistCart from '~/components/PlaylistCart/PlaylistCart';

// Home
function Home() {
    return <MainLayout children={<PlaylistCart />} />;
}

export default Home;

import {useSelector} from 'react-redux';
const Home = () => {
    const state = useSelector((state)=> state)
    return (
        <div>Booking landing page {JSON.stringify(state)}</div>
    )
}

export default Home;
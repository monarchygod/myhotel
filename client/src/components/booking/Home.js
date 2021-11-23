import {useSelector} from 'react-redux';
const Home = () => {
    const state = useSelector((state)=> state)
    return (
        <div>Booking landing page - new template will be added {JSON.stringify(state)}</div>
    )
}

export default Home;
import { Link } from "react-router-dom";

const TopNav = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/sign-in'>Sign-in</Link>
            <Link to='/sign-up'>Sign-up</Link>
        </div>
    )
}

export default TopNav;
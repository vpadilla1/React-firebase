import { Link, NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../context/UserProvider';

const Navbar = () => {
    const { user, signOutUser } = useContext(UserContext);
    const handleLogout = async () => {
        try {
            await signOutUser();
        } catch (error) {
            console.log(error.code)
        }
    }

    return (
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Link to={"/"}>Logros Financieros</Link>

            {user ? (
                <>
                    <NavLink to={"/"}>Home |</NavLink>
                    <button onClick={handleLogout}>Logout</button>
                </>
            ) : (
                <>
                    <NavLink to="/login">Login |</NavLink>
                    <NavLink to="/register">Register |</NavLink>
                </>
            )}
            </div>
        </nav>
    )
}

export default Navbar;
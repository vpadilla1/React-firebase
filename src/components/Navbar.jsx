
import { NavLink } from 'react-router-dom'
import {useContext}from 'react'
import { UserContext } from '../context/UserProvider';

const Navbar = () => {
    const { user,setUser } = useContext(UserContext);

    return (
        <div>
            {user ? (
                <>
                    <NavLink to={"/"}>Home</NavLink>
                    <button onClick={()=>{setUser(false)}}>Cerrar Sesión</button>
                </>
            ) : (
                <>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/register">Register</NavLink>
                </>
            )}
        </div>
    )
}

export default Navbar;
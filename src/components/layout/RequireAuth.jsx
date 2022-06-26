import { useContext } from 'react'
import { UserContext } from './../../context/UserProvider';
import { Navigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom';

const RequireAuth = () => {
    const { user } = useContext(UserContext);
    if (!user) {

        return <Navigate to="/Login" />
    }
    return <Outlet/>
}
export default RequireAuth;

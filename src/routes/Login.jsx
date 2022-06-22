import { useContext } from 'react'
import { UserContext } from "../context/UserProvider";
import {useNavigate} from "react-router-dom"

const Login = () => {

    const { user,setUser } = useContext(UserContext);
    const navigate = useNavigate()

    const hadleClickLogin = () =>{
        setUser(true)
        navigate("/")
    }
    return (
        <>
            <h1>Login</h1>
            <h2>{user ? 'En Line' : 'OffLine'}</h2>
            <button onClick={hadleClickLogin}>Acceder</button>
        </>
    )
}
export default Login;
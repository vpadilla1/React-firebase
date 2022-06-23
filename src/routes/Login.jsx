import { useContext, useState } from 'react'
import { UserContext } from "../context/UserProvider";
import { useNavigate } from "react-router-dom"

const Login = () => {
    const [email, setEmail] = useState("victor@test.com");
    const [password, setPassword] = useState("12345678");
    const { loginUser } = useContext(UserContext);
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Procesando form', email, password);
        try {
            await loginUser(email, password)
            console.log("usuario logeado " + email)
            navigate('/')
        } catch (error) {
            console.log(error.code)
        }
    }

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="email"
                    placeholder="Ingresar email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input type="password"
                    placeholder="Ingresar password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">Acceder</button>
            </form>
        </>
    )
}
export default Login;
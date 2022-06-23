import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

const Register = () => {
    const [email ,setEmail]= useState("victor@test.com");
    const [password, setPassword]= useState("12345678");

    const {registerUser} = useContext(UserContext);
    const navigate = useNavigate()

    const handleSubmit= async(e)=>{
        e.preventDefault();
        console.log('Procesando form', email, password);
        try {
            await registerUser(email,password)
            console.log("usuario creador")
            navigate('/')
        } catch (error) {
            console.log(error.code)
        }
    }

    return (
        <>
        <h1>Register</h1>
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

            <button type="submit">Register</button>
        </form>
        </>
    )
}
export default Register;
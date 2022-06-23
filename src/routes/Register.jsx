import { async } from "@firebase/util";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

const Register = () => {
    /* const [email ,setEmail]= useState("victor@test.com");
    const [password, setPassword]= useState("12345678"); */

    const navigate = useNavigate();
    const {registerUser} = useContext(UserContext);
    

    const {register,handleSubmit,getValues,setError,formState:{errors}} =useForm();

    const onSubmit = async ({email,password})=>{
        try {
            await registerUser(email,password)
            console.log("usuario creador")
            navigate('/')
        } catch (error) {
            console.log(error.code)
            switch(error.code){
                case "auth/email-already-in-use":
                    setError("email",{
                        message:"Usuario ya esta registrado"
                    })
                    break;
                    case "auth/invalid-email":
                        setError("email",{
                            message:"Formato de email no valido"
                    })
                    break;
                    case "auth/internal-error":
                        setError("password",{
                            message:"Formato de password no valido"
                    })
                    break;
                default:
                    console.log("Ocurio un error en el server auth/internal-error")
            }
            
        }

    }

    return (
        <>
        <h1>Register</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input 
                type="email" 
                placeholder="Ingresar email"
                {...register("email",{ required:{
                    value:true,
                    message:"Este campo es obligatorio"
                },
                pattern:{
                    value:/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[_a-z0-9-]+)*(\.[a-z]{2,15})/,
                    message:"Formato de email incorrecto"
                }
            })}
            />{errors.email && <span>{errors.email.message}</span>}
            <input 
                type="password" 
                placeholder="Ingresar password" 
                {...register("password",{ 
                    setValueAs:(v) =>v.trim(),
                 minLength:{
                    value:6,
                    message:"Minimo 6 caracteres"
                }
            })}
            />
            { errors.password && <span>{errors.password.message}</span>}
            <input 
                type="password" 
                placeholder="Confirme la password" 
                {...register("repassword", { 
                    setValueAs:(v) =>v.trim(),
                    validate:{
                        equals: (v)=> 
                        v === getValues("password") || 
                        "No coincide las password",
                    },
                })}
            />
            { errors.repassword && <span>{errors.repassword.message}</span>}

            <button type="submit">Register</button>
        </form>
        </>
    )
}
export default Register;
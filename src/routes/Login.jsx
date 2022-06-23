import { useContext } from 'react'
import { UserContext } from "../context/UserProvider";
import { useNavigate } from "react-router-dom"
import { useForm } from 'react-hook-form';
import { erroresFirebase } from './../utils/erroresFirebase';
import { formValidate } from './../utils/formValidate';
import FormInpunt from './../components/FormInpunt';
import FormError from './../components/FormError';

const Login = () => {
    const { loginUser } = useContext(UserContext);
    const { required, patternEmail, minLength, validateTrim } = formValidate();
    const { register, handleSubmit, setError, formState: { errors } } = useForm();

    const navigate = useNavigate();

    const onSubmit = async ({ email, password }) => {
        try {
            await loginUser(email, password)
            navigate('/')
        } catch (error) {
            console.log(error.code)
            setError("firebase", {
                message: erroresFirebase(error.code)
            })
        }
    }

    return (
        <>
            <h1>Login</h1>
            <FormError error={errors.firebase} />
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormInpunt
                    type="email"
                    placeholder="Ingresar email"
                    {...register("email", {
                        required,
                        pattern: patternEmail
                    })}
                >
                    <FormError error={errors.email} />
                </FormInpunt>

                <FormInpunt
                    type="password"
                    placeholder="Ingresar password"
                    {...register("password", {
                        minLength,
                        validate: validateTrim
                    })}
                >
                    <FormError error={errors.password} />
                </FormInpunt>

                <button type="submit">Acceder</button>
            </form>
        </>
    )
}
export default Login;
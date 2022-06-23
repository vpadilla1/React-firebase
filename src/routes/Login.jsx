import { useContext } from 'react'
import { UserContext } from "../context/UserProvider";
import { useNavigate } from "react-router-dom"
import { useForm } from 'react-hook-form';
import { erroresFirebase } from './../utils/erroresFirebase';
import { formValidate } from './../utils/formValidate';
import FormInpunt from './../components/FormInpunt';
import FormError from './../components/FormError';
import Title from './../components/Title';
import Button from './../components/Button';

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
            const { code, message } = erroresFirebase(error.code)
            setError(code, {
                message
            })
        }
    }

    return (
        <>
            <Title title="Login"/>
            <FormError error={errors.firebase} />
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormInpunt
                    label="Ingresar email"
                    error={errors.email}
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
                    label="Ingresar password"
                    error={errors.password}
                    type="password"
                    placeholder="Ingresar password"
                    {...register("password", {
                        minLength,
                        validate: validateTrim
                    })}
                >
                    <FormError error={errors.password} />
                </FormInpunt>

                <Button  text="Acceder" />
            </form>
        </>
    )
}
export default Login;
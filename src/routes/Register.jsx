import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";
import { erroresFirebase } from "../utils/erroresFirebase.js";
import FormError from "../components/FormError";
import { formValidate } from './../utils/formValidate';
import FormInpunt from './../components/FormInpunt';

const Register = () => {


    const navigate = useNavigate();
    const { registerUser } = useContext(UserContext);
    const { required, patternEmail, minLength, validateTrim, validateEquals } = formValidate()


    const { register, handleSubmit, getValues, setError, formState: { errors } } = useForm();

    const onSubmit = async ({ email, password }) => {
        try {
            await registerUser(email, password)
            navigate('/')
        } catch (error) {
            setError("firebase", {
                message: erroresFirebase(error.code)
            })
        }
    }



    return (
        <>
            <h1>Register</h1>
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

                <FormInpunt
                    type="password"
                    placeholder="Confirme la password"
                    {...register("repassword", {
                        validate: validateEquals(getValues),
                    })}
                >
                <FormError error={errors.repassword} />
                </FormInpunt>

                <button type="submit">Register</button>
            </form>
        </>
    )
}
export default Register;
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";
import { erroresFirebase } from "../utils/erroresFirebase.js";
import FormError from "../components/FormError";
import { formValidate } from './../utils/formValidate';
import FormInpunt from './../components/FormInpunt';
import Title from './../components/Title';
import Button from './../components/Button';

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
            console.log(error.code)
            const {code,message} = erroresFirebase(error.code)
            setError(code, {
                message
            })
        }
    }



    return (
        <>
            <Title title="Register"/>
            <FormError error={errors.firebase} />
            <form onSubmit={handleSubmit(onSubmit)}>

                <FormInpunt
                    type="email"
                    placeholder="Ingresar email"
                    {...register("email", {
                        required,
                        pattern: patternEmail
                    })}
                    label="Ingresar email"
                    error={errors.email}
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
                    label="Ingresar password"
                    error={errors.password}
                >
                <FormError error={errors.password} />
                </FormInpunt>

                <FormInpunt
                    type="password"
                    error={errors.repassword}
                    placeholder="Confirme la password"
                    {...register("repassword", {
                        validate: validateEquals(getValues),
                    })}
                    label= "Confirme password"
                >
                <FormError error={errors.repassword} />
                </FormInpunt>
                <Button type="submit" text="Register" />
            </form>
        </>
    )
}
export default Register;
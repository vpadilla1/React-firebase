import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../context/UserProvider";
import { erroresFirebase } from "../utils/erroresFirebase.js";
import FormError from "../components/form/FormError";
import { formValidate } from './../utils/formValidate';
import FormInpunt from '../components/form/FormInpunt';
import Title from './../components/Title';
import Button from '../components/form/Button';

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
            <div className="m-auto  mt-20 p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
            <FormError error={errors.firebase} />
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                    <Title title="Create New Account"/>
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
                    label="Password"
                    type="password"
                    placeholder="Password"
                    {...register("password", {
                        minLength,
                        validate: validateTrim
                    })}
                    error={errors.password}
                >
                <FormError error={errors.password} />
                </FormInpunt>

                <FormInpunt
                        label= "Repeat Password"
                        type="password"
                    error={errors.repassword}
                        placeholder="Repeat Password"
                    {...register("repassword", {
                        validate: validateEquals(getValues),
                    })}
                >
                <FormError error={errors.repassword} />
                </FormInpunt>

                    <Button type="submit" text="Register" />

                    <div className="text-sm  text-center font-medium text-gray-500 dark:text-gray-300">
                        Already have an account? <Link to="/login" className="text-blue-700 hover:underline dark:text-blue-500">Login</Link>
                    </div>
                </form>

            </div>
        </>
    )
}
export default Register;
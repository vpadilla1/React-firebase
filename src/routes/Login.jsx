import { useContext } from 'react'
import { UserContext } from "../context/UserProvider";
import { useNavigate, Link } from "react-router-dom"
import { useForm } from 'react-hook-form';
import { erroresFirebase } from './../utils/erroresFirebase';
import { formValidate } from './../utils/formValidate';
import FormInpunt from '../components/form/FormInpunt';
import FormError from '../components/form/FormError';
import Title from '../components/Title';
import Button from '../components/form/Button';

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
            <div className="m-auto mt-40 p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
            <FormError error={errors.firebase} />
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <Title title="Login" />
                <FormInpunt
                        label="Email address"
                        placeholder="Enter email"
                    error={errors.email}
                    type="email"
                    {...register("email", {
                        required,
                        pattern: patternEmail
                    })}
                    >
                    <FormError error={errors.email} />
                </FormInpunt>

                <FormInpunt
                    label="Password"
                    error={errors.password}
                    type="password"
                    placeholder="Enter password"
                    {...register("password", {
                        minLength,
                        validate: validateTrim
                    })}
                    >
                    <FormError error={errors.password} />
                </FormInpunt>

                <Button type={"submit"} text={"Acceder"} />
                    <div className="text-sm text-center font-medium text-gray-500 dark:text-gray-300">
                        Not registered? <Link to="/register" className="text-blue-700 hover:underline dark:text-blue-500">Create account</Link>
                    </div>
            </form>
            </div>
        </>
    )
}
export default Login;
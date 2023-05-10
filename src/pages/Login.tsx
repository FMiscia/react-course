import Input from '../components/Input'
import Button from '../components/Button'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { object, string } from 'yup'
import { useMemo } from 'react'
import Spinner from '../components/Spinner'
import useLoginMutation from '../hooks/mutations/useLoginMutation'

const Login = () => {
    const { isLoading, mutate: login } = useLoginMutation()
    const loginSchema = useMemo(
        () =>
            object({
                email: string().required().min(4),
                password: string().required().min(6)
            }),
        []
    )

    return (
        <div className="fill-v flex-column justify-center">
            <h2>LOGIN</h2>
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                onSubmit={({ email, password }) => login({ email, password })}
                validationSchema={loginSchema}>
                <Form>
                    <Field name="email" label="email" placeholder="Your Email" as={Input} />
                    <ErrorMessage component="div" name="email" />
                    <Field
                        name="password"
                        type="password"
                        label="password"
                        placeholder="Your Password"
                        autoComplete="currentPassword"
                        as={Input}
                    />
                    <ErrorMessage component="div" name="password" />
                    <div className="margin-top-s">
                        {isLoading ? <Spinner /> : <Button label="LOGIN" type="submit" />}
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default Login

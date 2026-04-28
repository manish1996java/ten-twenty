import { loginValidationSchema } from '@/lib/validations/loginValidationSchema';
import { Form, Formik } from 'formik';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
    const router = useRouter();


    const handleLogin = async (email: string, password: string) => {
        const res = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });


        if (!res?.error) {
            router.push("/dashboard"); // ✅ redirect
        } else {

            alert("Invalid credentials");
        }
    };

    return (

        <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100 px-10">
            <div className="w-full max-w-md">

                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    validationSchema={loginValidationSchema}
                    onSubmit={(values) => {
                        const { email, password } = values;
                        handleLogin(email,password);
                    }}
                >
                    {({  handleSubmit, handleBlur, handleChange, touched, errors }) => (
                        <Form onSubmit={handleSubmit}>

                            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                                Welcome back
                            </h2>


                            <div className="mb-4">
                                <label className="block text-sm text-gray-700 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name='email'
                                    placeholder="name@example.com"
                                    className="w-full rounded-md border text-black border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.email && errors.email && (
                                    <span className="text-xs text-red-500">{errors.email}</span>
                                )}
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm text-gray-700 mb-1">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="••••••••"
                                    className="w-full rounded-md border text-black border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />

                                {touched.password && errors.password && (
                                    <span className="text-xs text-red-500">{errors.password}</span>
                                )}
                            </div>

                            <div className="flex items-center gap-2 mb-6">
                                <input type="checkbox" className="cursor-pointer" />
                                <span className="text-sm text-gray-600">
                                    Remember me
                                </span>
                            </div>

                            <button type='submit' className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md text-sm font-medium transition">
                                Sign in
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default LoginForm
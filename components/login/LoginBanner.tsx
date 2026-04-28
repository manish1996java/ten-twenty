

const LoginBanner = () => {
    return (
        <div className="hidden md:flex md:w-1/2 items-center justify-center bg-blue-600 text-white px-16">
            <div className="max-w-md">

                <h1 className="text-4xl font-bold mb-4">
                    ticktock
                </h1>

                <p className="text-sm leading-relaxed text-blue-100">
                    Introducing ticktock, our cutting-edge timesheet web application
                    designed to revolutionize how you manage employee work hours.
                    With ticktock, you can effortlessly track and monitor employee
                    attendance and productivity from anywhere, anytime, using any
                    internet-connected device.
                </p>

            </div>
        </div>

    )
}

export default LoginBanner;
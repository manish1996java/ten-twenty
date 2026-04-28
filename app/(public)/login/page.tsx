'use client'

import LoginBanner from "@/components/login/LoginBanner";
import LoginForm from "@/components/login/LoginForm";


const LoginPage = () => {

  return (
    <div className="min-h-screen flex">
      <LoginForm/>
      <LoginBanner/>
    </div>
  );
}

export default LoginPage;
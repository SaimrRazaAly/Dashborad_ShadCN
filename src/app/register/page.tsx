import RegisterPage from '@/components/Register_User'
import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "Register",
    description: "Register Page",
}
const Register = () => {
  return (
   <RegisterPage/>
  )
}

export default Register
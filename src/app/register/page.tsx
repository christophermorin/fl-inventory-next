import { RegisterForm } from "../../components/Forms/RegisterForm"
export default async function Register() {
  return (
    <div className="gap-10">
      <h1 className="text-2xl font-bold uppercase tracking-widest text-center">Registration</h1>
      <RegisterForm />
    </div>
  )
}
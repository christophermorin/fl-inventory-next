import { SignInForm } from "@/components/Forms/SignInForm"
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
export default async function SignIn () {
  const session = await getServerSession(authOptions);

  if(session){
    redirect("/dashboard")
  }
  return (
    <div>
      <SignInForm />
    </div>
  )
}